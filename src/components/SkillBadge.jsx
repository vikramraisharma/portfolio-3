import styles from './SkillBadge.module.css'

const ACCENT_COLORS = {
  red: 'var(--accent-red)',
  yellow: 'var(--accent-yellow)',
  blue: 'var(--accent-blue)',
  green: 'var(--accent-green)',
}

export default function SkillBadge({ skill, accentColor }) {
  const borderColor = ACCENT_COLORS[accentColor] || null

  return (
    <div
      className={`paper-card ${styles.badge}`}
      style={borderColor ? { borderColor } : undefined}
    >
      <span className={`ink-text ${styles.label}`}>{skill || 'Skill'}</span>
    </div>
  )
}
