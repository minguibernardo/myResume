import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
        Did you like it ? talk to me by email
        </span>
      </a>
    </section>
  )
}

export default Contact
