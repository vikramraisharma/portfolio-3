import PageContainer from '../components/layout/PageContainer'
import Section from '../components/layout/Section'

export default function About() {
  return (
    <PageContainer>
      <Section id="about-hero" accentColor="yellow">
        <h1 className="ink-shadow">About Me</h1>
      </Section>
      <Section id="about-content" accentColor="green">
        <p className="ink-text">About content goes here.</p>
      </Section>
    </PageContainer>
  )
}
