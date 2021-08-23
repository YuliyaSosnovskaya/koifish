import {connect} from 'react-redux';

import BasketIcon from '../../img/basketIcon';

import classes from './basketButton.module.css';

const basketButton = ({basketArr, onButtonClick}) => {
  if (basketArr.length === 0) {
    return (
      <div className={classes.basketIcon}>
        <BasketIcon/>
      </div>
    );
  }

  let totalPrice = basketArr.reduce((acc, item) => {
    const price = item.currentPrice;
    return acc + price;
  }, 0);

  return (
    <div className={classes.basketComponent} onClick={onButtonClick}>
      <BasketIcon/>
      <span>{totalPrice.toFixed(1) + ' руб'}</span>
    </div>
  );
}

function mapStateToProps (state) {
  return {
    basketArr: state.basket
  }
}

export default connect(mapStateToProps, null)(basketButton);