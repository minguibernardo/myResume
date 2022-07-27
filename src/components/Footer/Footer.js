import Favorite from '@material-ui/icons/Widgets'
import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <a
      href='https://github.com/minguibernardo/'
      className='link footer__link'
    >
     Created with love  in &nbsp; &nbsp;<Favorite className='icon-svg'/>Github
    </a>
  </footer>
)

export default Footer
