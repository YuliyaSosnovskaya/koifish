import Header from '../header/header';

import classes from './layout.module.css';

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Header />
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;