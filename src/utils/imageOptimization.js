/**
 * imageOptimization.js
 * Utilities for responsive image srcset generation and format selection.
 */

/**
 * Generate a srcset string for 1x, 2x, and 3x pixel densities.
 *
 * @param {string} baseSrc  - Base image path (e.g. "/images/project.png")
 * @param {number} baseWidth - Display width at 1x density in CSS pixels
 * @returns {string} Value suitable for the `srcset` attribute
 *
 * Convention: density variants are named <base>@2x.<ext>, <base>@3x.<ext>.
 * The 1x variant uses the original path unchanged.
 *
 * @example
 * generateSrcSet('/images/project.png', 600)
 * // → "/images/project.png 600w, /images/project@2x.png 1200w, /images/project@3x.png 1800w"
 */
export function generateSrcSet(baseSrc, baseWidth) {
  if (!baseSrc || !baseWidth) return ''
  const lastDot = baseSrc.lastIndexOf('.')
  if (lastDot === -1) return baseSrc

  const base = baseSrc.slice(0, lastDot)
  const ext = baseSrc.slice(lastDot) // includes the dot

  return [1, 2, 3]
    .map((density) => {
      const suffix = density === 1 ? '' : `@${density}x`
      return `${base}${suffix}${ext} ${baseWidth * density}w`
    })
    .join(', ')
}

/**
 * Generate a `sizes` attribute string from a breakpoints map.
 * The last entry is always `100vw` as the default.
 *
 * @param {Record<string, string>} breakpoints - e.g. { 'max-width: 480px': '100vw', 'max-width: 768px': '50vw' }
 * @returns {string} Value suitable for the `sizes` attribute
 *
 * @example
 * generateSizes({ 'max-width: 480px': '100vw', 'max-width: 768px': '50vw' })
 * // → "(max-width: 480px) 100vw, (max-width: 768px) 50vw, 100vw"
 */
export function generateSizes(breakpoints = {}) {
  const conditions = Object.entries(breakpoints).map(([query, size]) => `(${query}) ${size}`)
  return [...conditions, '100vw'].join(', ')
}

/**
 * Return a WebP src when the browser supports it, falling back to the
 * provided PNG/JPG src. Detection uses an in-memory canvas test.
 *
 * @param {string} src - Original image path (e.g. "/images/project.png")
 * @returns {string} WebP path if supported, otherwise original src
 */
export function selectFormat(src) {
  if (!src) return src

  const supportsWebP = (() => {
    try {
      const canvas = document.createElement('canvas')
      canvas.width = 1
      canvas.height = 1
      return canvas.toDataURL('image/webp').startsWith('data:image/webp')
    } catch {
      return false
    }
  })()

  if (supportsWebP) {
    return src.replace(/\.(png|jpg|jpeg)$/i, '.webp')
  }
  return src
}

/**
 * Build a complete set of image props (src, srcSet, sizes) for a responsive
 * ComicImage, selecting the best available format.
 *
 * @param {string} src        - Original image path
 * @param {number} baseWidth  - Display width at 1x in CSS pixels
 * @param {Record<string, string>} [breakpoints] - Optional responsive breakpoints
 * @returns {{ src: string, srcSet: string, sizes: string }}
 */
export function buildImageProps(src, baseWidth, breakpoints) {
  const optimizedSrc = selectFormat(src)
  return {
    src: optimizedSrc,
    srcSet: generateSrcSet(optimizedSrc, baseWidth),
    sizes: generateSizes(breakpoints),
  }
}
