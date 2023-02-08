import react from 'react';
import './NavBar.css'
import Logo from './Logo'
import NavLinks from './NavLinks';

const NavBar = () => {

  return(
    <div className="navscontain">
    <Logo/>
    <NavLinks/>
    </div>
  )
}

export default NavBar;