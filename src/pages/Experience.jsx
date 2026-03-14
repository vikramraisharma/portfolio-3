import PageContainer from '../components/layout/PageContainer'
import Section from '../components/layout/Section'
import Grid from '../components/layout/Grid'

export default function Experience() {
  return (
    <PageContainer>
      <Section id="experience-hero" accentColor="blue">
        <h1 className="ink-shadow">Experience</h1>
      </Section>
      <Section id="experience-roles" accentColor="red">
        <Grid>
          <div className="paper-card">Role placeholder</div>
          <div className="paper-card">Role placeholder</div>
        </Grid>
      </Section>
    </PageContainer>
  )
}
