import { useState } from 'react';
import {NavLink} from 'react-router-dom';

import BasketButton from '../BasketButton/basketButton';
import { MENU_LINKS } from '../../metadata';

import classes from './headerMenu.module.css';
import BasketModal from '../BasketModal/BasketModal';

const HeaderMenu = () => {
  const [isBasketShown, setIsBasketShown] = useState(false);

  const changeBasketVisible = () => {
    setIsBasketShown((state) => !state);
  }

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
        <BasketButton onButtonClick={changeBasketVisible} />
        { isBasketShown ? <BasketModal/> : null}
      </div>
    </div>
  );
};

export default HeaderMenu;