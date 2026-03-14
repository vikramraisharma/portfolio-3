import { useEffect, useRef, useState } from 'react'

export function useActiveSection(threshold = 0.3) {
  const ref = useRef(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isActive }
}
