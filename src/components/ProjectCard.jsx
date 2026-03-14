import ComicImage from './ComicImage'
import styles from './ProjectCard.module.css'

export default function ProjectCard({
  title,
  description,
  tags = [],
  imageSrc,
  imageAlt,
  accentColor,
}) {
  return (
    <article className={`paper-card ink-border ${styles.card}`}>
      <ComicImage
        src={imageSrc}
        alt={imageAlt || title || 'Project screenshot'}
        accentColor={accentColor}
        placeholderLabel="[ image ]"
        className={styles.cardImage}
      />
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
