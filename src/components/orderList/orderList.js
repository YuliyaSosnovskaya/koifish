import { connect } from "react-redux";
import {deleteFromBasket} from '../../store/actions/index';

import classes from './orderList.module.css';

const OrderListItem = ({item, deleteItem}) => {
  return (
    <div className={classes.orderItem}>
      <div>
        <img className={classes.imgClass} src={item.img} alt="order item"/>
      </div>
      <div className={classes.amount}>{item.title}</div>
      <div className={classes.amount}>{`${item.amount} шт`}</div>
      <div  className={classes.amount}> {`${item.currentPrice} руб`}</div>
      <div className={classes.amount}>
      <img className={classes.iconDelete} onClick={() => deleteItem(item.id)} src='/icons/delete1.png' alt='delete icon'/>
      </div>
    </div>
  );
};

const OrderList = ({basketArr, deleteItemFromStore}) => {

  const deleteFromBasketHandler = (id) => {
    deleteItemFromStore(id);
  }
  
  return(
    <div className={classes.basketList}>
      { basketArr.map((item) => (
        <OrderListItem item={item} deleteItem={deleteFromBasketHandler} key={item.key} />
      )) }
    </div>
  )
}

function mapStateToProps (state) {
  return {
    basketArr: state.basket,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    deleteItemFromStore : (itemId) => dispatch(deleteFromBasket(itemId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);