import { useState } from 'react';
import {NavLink} from 'react-router-dom';

import BasketButton from '../basketButton/basketButton';
import { MENU_LINKS } from '../../metadata';

import classes from './headerMenu.module.css';
import BasketModal from '../basketModal/BasketModal';

const HeaderMenu = () => {
  const [isBasketShown, setIsBasketShown] = useState(false);

  const openBasketHandler = () => {
    setIsBasketShown(true);
  }

  const closeBasketHandler = () => {
    setIsBasketShown(false);
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
        <BasketButton onButtonClick={isBasketShown ? closeBasketHandler : openBasketHandler} />
        { isBasketShown ? <BasketModal closeBasket={closeBasketHandler} /> : null}
      </div>
    </div>
  );
};

export default HeaderMenu;