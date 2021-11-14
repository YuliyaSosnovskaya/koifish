import {connect} from 'react-redux';

import BasketIcon from '../../img/basketIcon';
import classes from './basketButton.module.css';

const basketButton = ({basketArr, totalPrice, onButtonClick}) => {
  if (basketArr.length === 0) {
    return (
      <div className={classes.basketIcon}>
        <BasketIcon/>
      </div>
    );
  }

  return (
    <div className={classes.basketComponent} onClick={onButtonClick} id='basketButton'>
      <BasketIcon/>
      <span>{totalPrice + ' руб'}</span>
    </div>
  );
}

function mapStateToProps (state) {
  return {
    basketArr: state.basket,
    totalPrice: state.totalPrice,
  };
}

export default connect(mapStateToProps, null)(basketButton);