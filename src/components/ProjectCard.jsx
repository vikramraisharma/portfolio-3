import styles from './ProjectCard.module.css'

export default function ProjectCard({ title, description, tags = [], imagePlaceholder = true }) {
  return (
    <article className={`paper-card ink-border ${styles.card}`}>
      {imagePlaceholder && (
        <div className={styles.imagePlaceholder}>
          <span className="type-label">[ image ]</span>
        </div>
      )}
      <div className={styles.content}>
        <h3 className={`ink-shadow ${styles.title}`}>{title || 'Project Title'}</h3>
        <p className={`ink-text ${styles.description}`}>
          {description || 'Project description placeholder — replace with actual project details.'}
        </p>
        {tags.length > 0 && (
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                <a href="#" className={styles.tagLink}>{tag}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
