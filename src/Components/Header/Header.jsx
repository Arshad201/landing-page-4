import './Header.css';
import logo from '../../assets/images/logo.svg';
import menuIcon from '../../assets/icons/menu.png';
import crossIcon from '../../assets/icons/cross.png';
import { useState } from 'react';

const Header = () => {

  const [view, setView] = useState(false);

  return (
    <header className='header'>
      <div className="header-wrapper">
        <div className="logo-wrapper">
            <a href="/">
                <img src={logo} alt="" />
            </a>
        </div>
        <nav className={`nav-links-wrapper ${!view && 'hideMobileMenu'}`}>
            <a className="nav-link drop-down-link">Find Jobs</a>
            <a className="nav-link drop-down-link">Recent post</a>
            <a className="nav-link">Company</a>
        </nav>
        <div className="header-btns-wrapper">
            <a href="/">Log in</a>
            <a href="/">Create Account</a>
        </div>
        <div className="header-icon" onClick={()=>setView(!view)}>
          {
            view ? <img src={crossIcon} alt="close-menu" /> :
            <img src={menuIcon} alt="menu" />
          }
        </div>
      </div>
    </header>
  )
}

export default Header
