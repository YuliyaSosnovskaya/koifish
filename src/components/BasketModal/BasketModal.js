import {useEffect} from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import {deleteFromBasket} from '../../store/actions/index';
import classes from './BasketModal.module.css';
import OrderList from '../orderList/orderList';

const BasketModal = ({totalPrice, closeBasket}) => {
  const onClickDocumentHandler = (event) => {
    let target = event.target;
    let isClickOutside = true;
    while (target) {
      if (target.id === 'basketModal' || target.id === 'basketButton') {
        isClickOutside = false;
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
        <span>{`Итого : ${totalPrice.toFixed(1)} руб`}</span>
        <NavLink exact to='/ordering'>
          <button className={classes.orderButton}>Оформить заказ</button>
        </NavLink>
      </div>
    </div>
  )
}
function mapStateToProps (state) {
  return {
    totalPrice: state.totalPrice,
  }
}

export default connect(mapStateToProps)(BasketModal);