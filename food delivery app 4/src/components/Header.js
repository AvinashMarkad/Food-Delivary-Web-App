const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
            alt="logo"
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  
export default Header;