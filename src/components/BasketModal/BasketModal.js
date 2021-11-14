import {useEffect} from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import classes from './BasketModal.module.css';
import OrderList from '../orderList/orderList';

const BasketModal = ({totalPrice, closeBasket, history}) => {
  const onClickDocumentHandler = (event) => {
    let target = event.target;
    let isClickOutside = true;
    while (target) {
      if (target.id === 'basketModal' || target.id === 'basketButton') {
        isClickOutside = false;
        break;
      } else if (target.id === 'checkoutButton') {
        isClickOutside = true;
        history.push('/ordering');
        break;
      } else {
        target = target.parentElement;
      }
    }
    if (isClickOutside) {
      closeBasket();
    }
  }
  
  useEffect(() => {
    document.addEventListener('click', onClickDocumentHandler, true);
    return () => {
      document.removeEventListener('click', onClickDocumentHandler, true);
    };
  }, []);

  return (
    <div className={classes.basketModal} id='basketModal'>
      <span className={classes.header}>Корзина</span>
      <OrderList />
      <div className={classes.basketDetails}>
        <span>{`Итого : ${totalPrice} руб`}</span>
        <button id='checkoutButton' className={classes.orderButton}>Оформить заказ</button>
      </div>
    </div>
  );
}

function mapStateToProps (state) {
  return {
    totalPrice: state.totalPrice,
  };
}

export default withRouter(connect(mapStateToProps)(BasketModal));