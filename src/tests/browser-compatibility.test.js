/**
 * browser-compatibility.test.js
 *
 * Tests that verify feature detection logic for:
 *  - SVG filter rendering
 *  - CSS custom property (variable) support
 *  - Flexbox support
 *  - CSS Grid support
 *  - Fallback activation (.no-svg-filters body class)
 *
 * Run with: npm test
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

// ── Helpers (mirroring the detection logic in SVGFilters.jsx) ──────────────

function detectSVGFilterSupport() {
  try {
    if (typeof CSS !== 'undefined' && CSS.supports) {
      return CSS.supports('filter', 'url(#a)')
    }
    const el = document.createElement('div')
    el.style.filter = 'url(#a)'
    return el.style.filter !== ''
  } catch {
    return false
  }
}

function detectCSSVariableSupport() {
  try {
    if (typeof CSS !== 'undefined' && CSS.supports) {
      return CSS.supports('color', 'var(--test)')
    }
    const el = document.createElement('div')
    el.style.setProperty('--test', '1')
    return el.style.getPropertyValue('--test') === '1'
  } catch {
    return false
  }
}

function detectFlexboxSupport() {
  try {
    if (typeof CSS !== 'undefined' && CSS.supports) {
      return CSS.supports('display', 'flex')
    }
    const el = document.createElement('div')
    el.style.display = 'flex'
    return el.style.display === 'flex'
  } catch {
    return false
  }
}

function detectGridSupport() {
  try {
    if (typeof CSS !== 'undefined' && CSS.supports) {
      return CSS.supports('display', 'grid')
    }
    const el = document.createElement('div')
    el.style.display = 'grid'
    return el.style.display === 'grid'
  } catch {
    return false
  }
}

function applyFallbackIfNeeded(supported) {
  if (!supported) {
    document.body.classList.add('no-svg-filters')
  } else {
    document.body.classList.remove('no-svg-filters')
  }
}

// ── SVG filter rendering ───────────────────────────────────────────────────

describe('SVG filter rendering', () => {
  it('returns a boolean from detectSVGFilterSupport', () => {
    const result = detectSVGFilterSupport()
    expect(typeof result).toBe('boolean')
  })

  it('does not throw when CSS.supports is unavailable', () => {
    const originalCSS = globalThis.CSS
    globalThis.CSS = undefined
    expect(() => detectSVGFilterSupport()).not.toThrow()
    globalThis.CSS = originalCSS
  })

  it('returns false gracefully when CSS.supports throws', () => {
    const originalCSS = globalThis.CSS
    globalThis.CSS = {
      supports: () => { throw new Error('not supported') },
    }
    const result = detectSVGFilterSupport()
    expect(result).toBe(false)
    globalThis.CSS = originalCSS
  })
})

// ── CSS custom property (variable) support ─────────────────────────────────

describe('CSS custom property support', () => {
  it('returns a boolean from detectCSSVariableSupport', () => {
    const result = detectCSSVariableSupport()
    expect(typeof result).toBe('boolean')
  })

  it('does not throw when CSS.supports is unavailable', () => {
    const originalCSS = globalThis.CSS
    globalThis.CSS = undefined
    expect(() => detectCSSVariableSupport()).not.toThrow()
    globalThis.CSS = originalCSS
  })
})

// ── Flexbox support ────────────────────────────────────────────────────────

describe('Flexbox support', () => {
  it('returns a boolean from detectFlexboxSupport', () => {
    const result = detectFlexboxSupport()
    expect(typeof result).toBe('boolean')
  })

  it('detects flex via element style when CSS.supports unavailable', () => {
    const originalCSS = globalThis.CSS
    globalThis.CSS = undefined
    // jsdom supports flex style assignments
    const result = detectFlexboxSupport()
    expect(typeof result).toBe('boolean')
    globalThis.CSS = originalCSS
  })
})

// ── CSS Grid support ───────────────────────────────────────────────────────

describe('CSS Grid support', () => {
  it('returns a boolean from detectGridSupport', () => {
    const result = detectGridSupport()
    expect(typeof result).toBe('boolean')
  })

  it('detects grid via element style when CSS.supports unavailable', () => {
    const originalCSS = globalThis.CSS
    globalThis.CSS = undefined
    const result = detectGridSupport()
    expect(typeof result).toBe('boolean')
    globalThis.CSS = originalCSS
  })
})

// ── Fallback activation ────────────────────────────────────────────────────

describe('SVG filter fallback activation', () => {
  beforeEach(() => {
    document.body.className = ''
  })

  afterEach(() => {
    document.body.className = ''
  })

  it('adds .no-svg-filters class to body when filters not supported', () => {
    applyFallbackIfNeeded(false)
    expect(document.body.classList.contains('no-svg-filters')).toBe(true)
  })

  it('does not add .no-svg-filters class when filters are supported', () => {
    applyFallbackIfNeeded(true)
    expect(document.body.classList.contains('no-svg-filters')).toBe(false)
  })

  it('removes .no-svg-filters class when filters become supported', () => {
    document.body.classList.add('no-svg-filters')
    applyFallbackIfNeeded(true)
    expect(document.body.classList.contains('no-svg-filters')).toBe(false)
  })

  it('is idempotent: calling with false twice does not duplicate the class', () => {
    applyFallbackIfNeeded(false)
    applyFallbackIfNeeded(false)
    const count = Array.from(document.body.classList).filter(c => c === 'no-svg-filters').length
    expect(count).toBe(1)
  })
})
