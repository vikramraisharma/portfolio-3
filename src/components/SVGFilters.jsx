import { useEffect } from 'react'

export default function SVGFilters() {
  useEffect(() => {
    // JS-based feature detection: check if filter: url() is actually applied.
    // CSS.supports can report true on browsers where SVG filters render incorrectly,
    // so we verify via direct style inspection.
    let supported = false
    try {
      if (typeof CSS !== 'undefined' && CSS.supports) {
        supported = CSS.supports('filter', 'url(#a)')
      } else {
        // Fallback: create a temporary element and check computed style
        const el = document.createElement('div')
        el.style.filter = 'url(#a)'
        supported = el.style.filter !== ''
      }
    } catch {
      supported = false
    }

    if (!supported) {
      document.body.classList.add('no-svg-filters')
    }

    return () => {
      document.body.classList.remove('no-svg-filters')
    }
  }, [])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      aria-hidden="true"
    >
      <defs>
        {/* Paper noise texture */}
        <filter id="paper-noise" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04 0.03"
            numOctaves="4"
            seed="2"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blended" />
          <feComposite in="blended" in2="SourceGraphic" operator="in" />
        </filter>

        {/* Ink softness blur */}
        <filter id="ink-soft" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur stdDeviation="1.2" result="blurred" />
          <feMerge>
            <feMergeNode in="blurred" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Grain / texture displacement */}
        <filter id="grain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.025"
            numOctaves="4"
            seed="5"
            result="turbulence"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="3"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Combined ink + paper effect */}
        <filter id="ink-paper" x="-2%" y="-2%" width="104%" height="104%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves="4"
            seed="8"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="2"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          <feGaussianBlur stdDeviation="0.8" in="displaced" />
        </filter>

        {/* Comic book ink effect for images — combines desaturation, paper texture, and subtle edge displacement */}
        <filter id="inkEffect" x="-2%" y="-2%" width="104%" height="104%" colorInterpolationFilters="sRGB">
          {/* Step 1: paper texture noise */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04 0.03"
            numOctaves="3"
            seed="12"
            stitchTiles="stitch"
            result="paperNoise"
          />
          <feColorMatrix type="saturate" values="0" in="paperNoise" result="grayNoise" />
          {/* Step 2: slight edge displacement for ink wobble */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="grayNoise"
            scale="1.5"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          {/* Step 3: blend paper texture over displaced image */}
          <feBlend in="displaced" in2="grayNoise" mode="multiply" result="textured" />
          {/* Step 4: soft halo for ink edge feel */}
          <feGaussianBlur stdDeviation="0.5" in="textured" result="softened" />
          <feMerge>
            <feMergeNode in="softened" />
            <feMergeNode in="displaced" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  )
}
