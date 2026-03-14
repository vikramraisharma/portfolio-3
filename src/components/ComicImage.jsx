import { useRef, useEffect, useState } from 'react'
import styles from './ComicImage.module.css'

const ACCENT_HEX = {
  red: '#ff1744',
  yellow: '#ffeb3b',
  blue: '#00bfff',
  green: '#00ff41',
}

/**
 * ComicImage — renders an image with the #inkEffect SVG filter applied.
 * Falls back to a CSS-only placeholder when no src is provided.
 * Accepts an optional accentColor that tints a small strip (≤20%) of the image.
 *
 * Performance: measures filter render time after load and warns if >16ms (60fps budget).
 */
export default function ComicImage({
  src,
  srcSet,
  sizes,
  alt = '',
  accentColor,
  priority = false,
  width,
  height,
  className = '',
  placeholderLabel = '[ image ]',
}) {
  const imgRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [filterFailed, setFilterFailed] = useState(false)

  useEffect(() => {
    if (!loaded || !imgRef.current) return

    // Measure SVG filter rendering cost; fall back to CSS-only if too slow.
    const start = performance.now()
    const rafId = requestAnimationFrame(() => {
      const elapsed = performance.now() - start
      if (elapsed > 16) {
        console.warn(
          `[ComicImage] SVG filter rendering exceeded 16ms (${elapsed.toFixed(1)}ms) — switching to CSS-only fallback`
        )
        setFilterFailed(true)
      }
    })
    return () => cancelAnimationFrame(rafId)
  }, [loaded])

  const accentHex = accentColor ? ACCENT_HEX[accentColor] : null

  // No src — render CSS-only ink placeholder.
  if (!src) {
    return (
      <div
        className={`${styles.placeholder} ${className}`}
        role="img"
        aria-label={alt || placeholderLabel}
      >
        <span className="type-label">{placeholderLabel}</span>
        {accentHex && (
          <div
            className={styles.accentStrip}
            style={{ backgroundColor: accentHex }}
            aria-hidden="true"
          />
        )}
      </div>
    )
  }

  // SVG filter style — omitted when performance fallback is active.
  const filterStyle = filterFailed ? undefined : { filter: 'url(#inkEffect)' }

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <img
        ref={imgRef}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={filterStyle}
        className={`${styles.image} ${filterFailed ? styles.cssOnly : ''}`}
      />
      {accentHex && (
        <div
          className={styles.accentStrip}
          style={{ backgroundColor: accentHex }}
          aria-hidden="true"
        />
      )}
    </div>
  )
}
