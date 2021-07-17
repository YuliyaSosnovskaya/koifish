import {Link} from 'react-router-dom';

import LoginIcon from '../../img/loginIcon';

import logo from '../../img/logo.png'; 
import classes from './header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <Link to='/catalog'>
          <img src={logo} className={classes.logo}alt="logo" />
        </Link>
        <div className={classes.login}>
          <a href="tel:+74951234567">+7 (495) 123-45-67</a>
          <div className={classes.loginbutton}>
            <div className={classes.icon}>
              <LoginIcon />
            </div>
            <span>Войти</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
