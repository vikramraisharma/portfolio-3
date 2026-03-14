import PageContainer from '../components/layout/PageContainer'
import Section from '../components/layout/Section'
import Grid from '../components/layout/Grid'
import ProjectCard from '../components/ProjectCard'
import styles from './Home.module.css'

const FEATURED_PROJECTS = [
  {
    title: 'Project Alpha',
    description: 'A web application for managing tasks and collaborating with teams in real time.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Project Beta',
    description: 'A data visualization dashboard surfacing key metrics for business stakeholders.',
    tags: ['D3.js', 'Python', 'REST API'],
  },
  {
    title: 'Project Gamma',
    description: 'An open-source CLI tool that automates repetitive developer workflows.',
    tags: ['Go', 'CLI', 'Open Source'],
  },
]

export default function Home() {
  return (
    <PageContainer>
      <Section id="home-hero" accentColor="red" className={styles.hero}>
        <p className="type-label">Portfolio</p>
        <h1 className={`type-hero ink-shadow ${styles.heroHeading}`}>
          Developer &amp;<br />Designer
        </h1>
        <p className={`type-subheading ${styles.heroSub}`}>
          Building thoughtful digital products — placeholder tagline ready for final copy.
        </p>
        <div className={styles.heroCta}>
          <a href="/contact" className={`ink-border paper-card ${styles.ctaButton}`}>
            Get in Touch
          </a>
          <a href="/experience" className={styles.ctaLink}>
            View Experience
          </a>
        </div>
      </Section>

      <Section id="home-intro" accentColor="yellow">
        <h2 className="ink-shadow">About This Work</h2>
        <p className="ink-text">
          Intro section placeholder — replace with a brief paragraph describing the developer's
          background, philosophy, and the kinds of problems they love to solve.
        </p>
      </Section>

      <Section id="home-featured" accentColor="blue">
        <h2 className="ink-shadow">Featured Projects</h2>
        <Grid>
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </Grid>
      </Section>
    </PageContainer>
  )
}
