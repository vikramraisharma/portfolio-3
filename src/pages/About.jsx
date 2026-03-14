import PageContainer from '../components/layout/PageContainer'
import Section from '../components/layout/Section'
import Grid from '../components/layout/Grid'
import SkillBadge from '../components/SkillBadge'
import styles from './About.module.css'

const SKILLS = [
  { skill: 'JavaScript', accentColor: 'yellow' },
  { skill: 'React', accentColor: 'blue' },
  { skill: 'Node.js', accentColor: 'green' },
  { skill: 'Python', accentColor: 'red' },
  { skill: 'SQL', accentColor: 'blue' },
  { skill: 'CSS', accentColor: 'yellow' },
  { skill: 'Git', accentColor: 'green' },
  { skill: 'Docker', accentColor: 'blue' },
  { skill: 'TypeScript', accentColor: 'blue' },
  { skill: 'REST APIs', accentColor: 'red' },
  { skill: 'Testing', accentColor: 'green' },
  { skill: 'CI / CD', accentColor: 'yellow' },
]

export default function About() {
  return (
    <PageContainer>
      <Section id="about-profile" accentColor="yellow">
        <div className={styles.profile}>
          <div className={`paper-card ink-border ${styles.avatarPlaceholder}`}>
            <span className="type-label">[ photo ]</span>
          </div>
          <div className={styles.profileText}>
            <p className="type-label">About Me</p>
            <h1 className="ink-shadow">Your Name</h1>
            <p className={`type-subheading ${styles.jobTitle}`}>
              Full-Stack Developer &amp; Creative Technologist
            </p>
            <p className="ink-text">
              Brief personal bio placeholder — introduce yourself in two or three sentences.
              Describe your background, what drives your work, and what makes you unique.
            </p>
          </div>
        </div>
      </Section>

      <Section id="about-bio" accentColor="green">
        <h2 className="ink-shadow">Background</h2>
        <div className={styles.bioColumns}>
          <p className="ink-text">
            Background section placeholder — share your origin story. Where did you start,
            what path brought you to software development, and what have been the key
            turning points in your career?
          </p>
          <p className="ink-text">
            Second column placeholder — elaborate on your interests, side projects, or the
            domains you find most exciting to work in. Keep it concise but personal.
          </p>
        </div>
      </Section>

      <Section id="about-skills" accentColor="blue">
        <h2 className="ink-shadow">Skills</h2>
        <Grid minWidth="140px">
          {SKILLS.map(({ skill, accentColor }) => (
            <SkillBadge key={skill} skill={skill} accentColor={accentColor} />
          ))}
        </Grid>
      </Section>
    </PageContainer>
  )
}
