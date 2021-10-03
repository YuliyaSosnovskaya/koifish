import Header from '../header/header';
import HeaderMenu from '../headerMenu/headerMenu';

import classes from './layout.module.css';

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Header />
      <HeaderMenu/>
      <div style={{
        backgroundColor: '#f9f9f9',
        flexGrow: 1,
        display: 'flex'
      }}>
        <div className={classes.content}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;