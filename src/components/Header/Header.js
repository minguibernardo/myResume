import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import logo from '../logo/logo.jpg'

const Header = () => {
  const { homepage, title, } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
          <img src={logo} className='logo' alt='logo'/>
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
