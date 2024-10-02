import { LOGO_URL } from '../utils/constants';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  //   let btnName = 'Login';

  const [btnNameReact, setBtnNameReact] = useState('Login');
  // console.log('header render');

  // * if no dependency array => useEffect is called on every component render of the component
  // * if the dependency array is empty => useEffect is called only on the initial render(just once) of the component
  // * if the dependency array contains a dependency => useEffect is called everytime the value of the depencecy changes
  // * Dependency: A depency can be a state variable (or) a function

  // useEffect(() => {
  //   console.log(`useEffect Called`);
  // }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        {/* <img src={LOGO_URL} alt="App Logo" className="logo" /> */}
        <Link to="/">
          <img
            src="https://t3.ftcdn.net/jpg/00/70/15/96/240_F_70159600_lyb7DSbP2GKowZ0l2YbnHU1wCcxYkYxL.jpg"
            alt="Logo"
            className="logo"
          />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="links">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="links">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="links">Cart</Link>
          </li>
          <button
            className="loginBtn"
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
