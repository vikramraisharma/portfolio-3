import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1 className="ink-shadow">Contact</h1>
      <p style={{ marginBottom: '2rem', maxWidth: '560px', lineHeight: 1.7 }}>
        Have a project in mind or want to connect? Fill out the form below and I'll get back to
        you as soon as possible.
      </p>
      <ContactForm />
    </main>
  )
}
