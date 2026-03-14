import ContactForm from '../components/ContactForm'
import PageContainer from '../components/layout/PageContainer'
import Section from '../components/layout/Section'

export default function Contact() {
  return (
    <PageContainer>
      <Section id="contact-hero" accentColor="green">
        <h1 className="ink-shadow">Contact</h1>
        <p style={{ maxWidth: '560px', lineHeight: 1.7 }}>
          Have a project in mind or want to connect? Fill out the form below and I'll get back to
          you as soon as possible.
        </p>
      </Section>
      <Section id="contact-form" accentColor="yellow">
        <ContactForm />
      </Section>
    </PageContainer>
  )
}
