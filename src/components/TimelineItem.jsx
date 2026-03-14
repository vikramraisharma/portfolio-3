import styles from './TimelineItem.module.css'

export default function TimelineItem({ role, company, startDate, endDate, description, accentColor }) {
  const dateRange = [startDate, endDate || 'Present'].filter(Boolean).join(' — ')

  return (
    <div className={styles.item}>
      <div className={styles.connector}>
        <div
          className={styles.dot}
          style={accentColor ? { borderColor: `var(--accent-${accentColor})` } : undefined}
        />
        <div className={styles.line} />
      </div>
      <div className={`paper-card ink-border ${styles.content}`}>
        <span className={`type-label ${styles.date}`}>{dateRange || '[ date range ]'}</span>
        <h3 className={`ink-shadow ${styles.role}`}>{role || 'Role Title'}</h3>
        <span className={styles.company}>{company || 'Company Name'}</span>
        <p className={`ink-text ${styles.description}`}>
          {description || 'Role description placeholder — replace with responsibilities and achievements.'}
        </p>
      </div>
    </div>
  )
}
