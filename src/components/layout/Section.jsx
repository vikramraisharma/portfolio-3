import { useActiveSection } from '../../hooks/useActiveSection'

export default function Section({ children, className = '', id, accentColor }) {
  const { ref, isActive } = useActiveSection()

  const accentClass = accentColor ? `section--accent-${accentColor}` : ''
  const activeClass = isActive ? 'section--active' : ''

  return (
    <section
      ref={ref}
      id={id}
      className={`section ${accentClass} ${activeClass} ${className}`.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </section>
  )
}
