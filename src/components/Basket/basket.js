import {connect} from 'react-redux';

import BasketIcon from '../../img/basketIcon';

import classes from './basket.module.css';

const Basket = ({basketArr}) => {
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
    <div className={classes.basketComponent}>
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

// TODO: will be implemented in the near fufture
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);