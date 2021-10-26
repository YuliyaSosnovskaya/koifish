import {useEffect} from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import {deleteFromBasket} from '../../store/actions/index';

import classes from './BasketModal.module.css';

const BasketModal = ({basketArr, closeBasket, deleteItemFromStore}) => {
  const totalPrice = basketArr.reduce((acc, item) => {
    const price = item.currentPrice;
    return acc + price;
  }, 0);

  const onClickDocumentHandler = (event) => {
    let target = event.target;
    let isClickOutside = true;
    while (target) {
      if (target.id === 'basketModal') {
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
  const deleteFromBasketHandler = (id) => {
    deleteItemFromStore(id);
  }

  useEffect(() => {
    document.addEventListener('click', onClickDocumentHandler, true);
    return () => {
      document.removeEventListener('click', onClickDocumentHandler);
    };
  }, []);

  return (
    <div className={classes.basketModal} id='basketModal'>
      <span className={classes.header}>Корзина</span>
      <div className={classes.basketList}>
        
         { basketArr.map((item) => (
          
          <div className={classes.orderItem} key={Math.floor(Math.random() * 100000)}>
            <div>
              <img className={classes.imgClass} src={item.img} alt="order item"/>
            </div>
            <div className={classes.amount}>{item.title}</div>
            <div className={classes.amount}>{`${item.amount} шт`}</div>
            <div  className={classes.amount}> {`${item.currentPrice} руб`}</div>
            <div className={classes.amount}>
             <img className={classes.iconDelete} onClick={() => deleteFromBasketHandler(item.id)} src='/icons/delete1.png' alt='delete icon'/>
            </div>

          </div>
        )) }
        
      
      </div>
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
    basketArr: state.basket
  }
}
function mapDispatchToProps(dispatch) {
  return {
    deleteItemFromStore : (itemId) => dispatch(deleteFromBasket(itemId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketModal);