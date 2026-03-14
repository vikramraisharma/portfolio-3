import PageContainer from '../components/layout/PageContainer'
import Section from '../components/layout/Section'
import Grid from '../components/layout/Grid'

export default function Home() {
  return (
    <PageContainer>
      <Section>
        <h1 className="ink-shadow">Home</h1>
      </Section>
      <Section>
        <Grid>
          <div className="paper-card">Featured Work</div>
          <div className="paper-card">Skills</div>
          <div className="paper-card">Contact</div>
        </Grid>
      </Section>
    </PageContainer>
  )
}
