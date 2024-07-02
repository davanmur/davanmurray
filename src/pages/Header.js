import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
     <header>
     <div class="top-logo-container">
      <Link to="/" id="top-logo"><img src="/images/logo-color.png" alt="logo"></img></Link>
    </div>
      
      <div class="topnav" id="left">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Link to="/" id="logo"><img src="/images/logo-color.png" alt="logo"></img></Link>

        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
      </div>
    </header>

      <Outlet />
    </>
  )
};

export default Header;