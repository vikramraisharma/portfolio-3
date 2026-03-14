import PageContainer from '../components/layout/PageContainer'
import Section from '../components/layout/Section'
import TimelineItem from '../components/TimelineItem'

const EXPERIENCE = [
  {
    role: 'Senior Software Engineer',
    company: 'Company A',
    startDate: '2022',
    endDate: null,
    accentColor: 'red',
    description:
      'Led development of core product features, mentored junior engineers, and drove architectural decisions for a high-traffic web application. Placeholder — replace with actual responsibilities.',
  },
  {
    role: 'Software Engineer',
    company: 'Company B',
    startDate: '2020',
    endDate: '2022',
    accentColor: 'blue',
    description:
      'Built and maintained RESTful APIs, collaborated cross-functionally with design and product teams, and improved test coverage significantly. Placeholder — replace with actual responsibilities.',
  },
  {
    role: 'Junior Developer',
    company: 'Company C',
    startDate: '2018',
    endDate: '2020',
    accentColor: 'green',
    description:
      'Started career working on front-end components, fixing bugs, and contributing to internal tooling improvements. Placeholder — replace with actual responsibilities.',
  },
]

export default function Experience() {
  return (
    <PageContainer>
      <Section id="experience-header" accentColor="blue">
        <p className="type-label">Career History</p>
        <h1 className="ink-shadow">Experience</h1>
        <p className="type-subheading">
          A timeline of roles, companies, and the work done along the way.
        </p>
      </Section>

      <Section id="experience-timeline" accentColor="red">
        <h2 className="ink-shadow">Work History</h2>
        <div>
          {EXPERIENCE.map((item) => (
            <TimelineItem
              key={`${item.role}-${item.company}`}
              role={item.role}
              company={item.company}
              startDate={item.startDate}
              endDate={item.endDate}
              description={item.description}
              accentColor={item.accentColor}
            />
          ))}
        </div>
      </Section>
    </PageContainer>
  )
}
