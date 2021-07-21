
import CatalogItem from "../catalogItem/catalogItem";
import { MENU_LINKS } from '../../metadata';

import classes from './mainPage.module.css';

const MainPage = () => {
  return (
    <>
      {
        MENU_LINKS.map((item) => (
          <div className={classes.container} key={item.title}>
            <CatalogItem 
              title={item.title}
              img={item.img}
              to={item.to}
            />
          </div>
        ))
      }
    </>
  );
};

export default MainPage;
