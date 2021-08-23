import { connect } from "react-redux";
import classes from './BasketModal.module.css';

const BasketModal = ({basketArr}) => {

  const totalPrice = basketArr.reduce((acc, item) => {
    const price = item.currentPrice;
    return acc + price;
  }, 0);

  console.log(basketArr);
  // const orderList =basketArr.map((item) => {
  //   <div className={classes.orderItem}>
  //     <div className={classes.img}><img src={item.img}/>
  //     </div>
  //     <div>{item.title}</div>
  //     <div className={classes.amount}>{`${item.amount} шт`}</div>
  //     <div> {item.currentPrice}</div>

  //   </div>
  // }) ;

  return (
    <div className={classes.basketModal}>
      <span className={classes.header}>Корзина</span>
      <div className={classes.basketList}>
        
        {basketArr.map((item) => (
          
          <div className={classes.orderItem} key={item.id}>
            <div>
              <img className={classes.imgClass} src={item.img}/>
            </div>
            <div className={classes.amount}>{item.title}</div>
            <div className={classes.amount}>{`${item.amount} шт`}</div>
            <div  className={classes.amount}> {`${item.currentPrice} руб`}</div>
            <div className={classes.amount}>
             <img className={classes.iconDelete} src='/icons/delete1.png'/>
            </div>

          </div>
        )) 
        }
      
      </div>
      <div className={classes.basketDetails}>
        <span>{`Итого : ${totalPrice} руб`}</span>
        <button className={classes.orderButton}>Оформить заказ</button>
      </div>
    </div>
  )
}
function mapStateToProps (state) {
  return {
    basketArr: state.basket
  }
}

export default connect(mapStateToProps, null)(BasketModal);