import { useContext, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll';
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  // toggleNavList = () => setShowNavList(!showNavList)
  function source() {
    scroll.scrollMore(600);
    setShowNavList(!showNavList)
  }
  function ability() {
    scroll.scrollMore(1000);
    setShowNavList(!showNavList)
  }
  function connect() {
    scroll.scrollMore(9000);
    setShowNavList(!showNavList)
  }
  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={source}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={ability}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={connect}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='center btn btn--icon'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <Brightness2Icon/> : <WbSunnyRoundedIcon/>}
      </button>

      <button
        type='button'
        onClick={connect}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
