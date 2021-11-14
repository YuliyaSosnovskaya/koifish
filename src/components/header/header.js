import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from "../../context/AuthContext";
import { getAuth, signOut } from "firebase/auth";


import LoginIcon from '../../img/loginIcon';

import logo from '../../img/logo.png'; 
import classes from './header.module.css';

const Header = () => {
  const {user,firebaseApp } = useContext(AuthContext);

  const signOutHandler = () => {
    const auth = getAuth(firebaseApp);
    signOut(auth).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <Link to='/catalog'>
          <img src={logo} className={classes.logo}alt="logo" />
        </Link>
        <div className={classes.login}>
          <a href="tel:+74951234567">+7 (495) 123-45-67</a>
          <div className={classes.loginbutton} >
            <div className={classes.icon}>
              <LoginIcon />
            </div>
            <span className={classes.userName}>{user ? `${user.email},` : null}</span>
            {user ? (
              <span className={classes.loginSpan} onClick={signOutHandler}>{' Выйти'}</span>
            ) : (
              <NavLink exact to='/auth' >
                <span className={classes.loginSpan}>{'Войти'}</span>
              </NavLink>
            ) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
