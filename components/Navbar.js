import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [showAboutUsSubmenu, setShowAboutUsSubmenu] = useState(false);
  const [showWhatWeDoSubmenu, setShowWhatWeDoSubmenu] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 650 });
  const router = useRouter();

  const handleBurgerMenuToggle = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const handleMenuItemClick = (url) => {
    setIsBurgerMenuOpen(false); // Close the burger menu when a menu item is clicked
    router.push(url); // Use the router to navigate to the specified URL
  };

  const handleAboutUsClick = () => {
    setShowAboutUsSubmenu(!showAboutUsSubmenu);
    setShowWhatWeDoSubmenu(false);
  };

  const handleWhatWeDoClick = () => {
    setShowWhatWeDoSubmenu(!showWhatWeDoSubmenu);
    setShowAboutUsSubmenu(false);
  };

  return (
    <div className='header'>
      <nav>
        <div className='container'>
          <div className='wrapper'>
            <div className='logo'>
              <a href='/'>
                <img src="/images/navbar/micareprovider.png" alt="Logo" />
              </a>
            </div>
            {isMobile ? 
            (
              <div className="burger-menu">
                <Menu right isOpen={isBurgerMenuOpen} onStateChange={({ isOpen }) => setIsBurgerMenuOpen(isOpen)}>
                  <ul>
                    <li>
                      {/* <span onClick={handleAboutUsClick}>About Us</span> */}
                      <a className='menu-item' onClick={() => handleMenuItemClick('/about')}>About Us</a>
                      {/* {showAboutUsSubmenu && (
                        <div className="submenu">
                          <a className='menu-item' onClick={() => handleMenuItemClick('/about/story')}>Our Story</a>
                          <br></br>
                          <a className='menu-item' onClick={() => handleMenuItemClick('/about/mission')}>Our Mission</a>
                        </div>
                      )} */}
                    </li>
                    <li>
                      <a className='menu-item' onClick={() => handleMenuItemClick('/forms')}>Forms</a>
                    </li>
                    {/* <li>
                      <span onClick={handleWhatWeDoClick}>What We Do</span>
                      <a className='menu-item' onClick={() => handleMenuItemClick('/contact')}>Contact Us</a>
                      {/* {showWhatWeDoSubmenu && (
                        <div className="submenu">
                          <a className='menu-item' onClick={() => handleMenuItemClick('/home-care')}>Home Care</a>
                          <br></br>
                          <a className='menu-item' onClick={() => handleMenuItemClick('/home-health')}>Home Health</a>
                        </div>
                      )} 
                    </li> */}
                    <li>
                      <a className='menu-item' onClick={() => handleMenuItemClick('/contact')}>Contact Us</a>
                    </li>
                  </ul>
                </Menu>
              </div>
            ) : (
              <ul>
                <li className="dropdown">
                  {/* <span>About Us</span> */}
                  <a href='/about'>About Us</a>
                  {/* <div className="dropdown-content">
                    <a href='/about/story'>Our Story</a>
                    <a href='/about/mission'>Our Mission</a>
                  </div> */}
                </li>
                {/* <li className="dropdown">
                  <span>What We Do</span>
                   <div className="dropdown-content">
                    <a href='/home-care'>Home Care</a>
                    <a href='/home-health'>Home Health</a>
                  </div> 
                </li> */}
                <li>
                  <a href='/forms'>Forms</a>
                </li>
                <li>
                  <a href='/contact'>Contact Us</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
