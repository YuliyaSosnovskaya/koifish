import {NavLink} from 'react-router-dom';

import Basket from '../Basket/basket';
import { MENU_LINKS } from '../../metadata';

import classes from './headerMenu.module.css';

const HeaderMenu = () => {
  return (
    <div className={classes.headerMenu}>
      <div className={classes.container}>
        <div className={classes.linksContainer}>
          {
            MENU_LINKS.map((link) => (
              <NavLink
                activeClassName={classes.activeLink}
                exact
                to={link.to}
                key={link.title}
              >
                {link.title}
              </NavLink>
            ))
          }          
        </div>
        <Basket />
      </div>
    </div>
  );
};

export default HeaderMenu;