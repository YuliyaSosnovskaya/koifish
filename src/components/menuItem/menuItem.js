import {useState} from 'react';
import {connect} from 'react-redux';

import Card from "../../shared/card/card";
import { addToBasket } from '../../store/actions';

import classes from './menuItem.module.css';

const ADDITIONAL_COST = 4.2;

const MenuItem = ({title, img, description, price, id, saveItemToStore}) => { 
  const [isImg, setIsImg] = useState(true);
  const [currentPrice, setCurrentPrice] = useState(price);
  const [amount, setAmount] = useState('8');

  const changeDisplay = () => {
   if(isImg) {
    setIsImg(false);
   } else {
    setIsImg(true);
   }
  }

  const changeAmountHandler = (event) => {
    const amountValue = event.target.value;
    setAmount(amountValue);
    const newPrice = amountValue === '8' ? price : price + ADDITIONAL_COST;
    setCurrentPrice(newPrice);
  }

  const addToBasketHandler = () => {
    saveItemToStore({id, currentPrice, amount, title, img});
  }
 
  const forImg = isImg ? classes.showImg : classes.hideImg;
  const forChoose = isImg ? classes.hideChoice : classes.showChoice;
  
  return (
    <Card>
      <div className={classes.menuItem}>
        <div className={classes.details}>
          
          <div className={[classes.descdiv, forImg].join(' ')}>
            <img src={img} alt={title} />
            <div className={classes.padding}>
              <span className={classes.title}>{title}</span>
              <span className={classes.description}>{description}</span>
            </div>
          </div>
          
          <div className={[classes.chooseBlock, forChoose].join(' ')}>
            <p>Выберите количество</p>
            <div >
              <label>
                <input
                  type="radio"
                  value="8"
                  checked={amount === '8'}
                  onChange={changeAmountHandler}
                />
                8
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="12"
                  checked={amount === '12'}
                  onChange={changeAmountHandler}
                />
                12
              </label>
            </div>
          </div>
          
          <div className={classes.padding}>
            <span className={classes.price}>{currentPrice} руб</span>
            <div className={classes.divForButtons} >
              {!isImg && <div className={classes.back} onClick={changeDisplay}></div>}
              {isImg && <button className={classes.button} onClick={changeDisplay}>Свойства</button>}
              {!isImg && <button className={classes.button} onClick={addToBasketHandler}>В корзину</button>}
            </div>
           
          </div>
        </div>
      </div>
    </Card>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    saveItemToStore : (orderItem) => dispatch(addToBasket(orderItem))
  }
}

export default connect(null, mapDispatchToProps)(MenuItem);





