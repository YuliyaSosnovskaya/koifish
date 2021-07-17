import Header from '../header/header';
import HeaderMenu from '../headerMenu.js/headerMenu';

import classes from './layout.module.css';

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Header />
      <HeaderMenu/>
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;