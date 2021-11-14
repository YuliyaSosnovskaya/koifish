import { useState } from 'react';
import { connect } from 'react-redux';

import { addOrderToFirebase } from '../../utils'

import { TextInput, DropdawnInpupt, CheckboxInput, RadioButton } from '../inputs/inputs';
import OrderList from '../orderList/orderList';
import WithLabel from '../withLabelHOC/withLabelHOC';
import classes from './ordering.module.css';

const ONE_DAY_MS = 86400000;
const DATE_FORMAT = {month: 'long', day: 'numeric'};

const getFormatDate = (date) => {
  return date.toLocaleDateString('ru-RU', DATE_FORMAT);
}

const getHoursOptions = (isToday = true) => {
  const currentHour = isToday ? new Date().getHours() : 0;
  const arr = [];
  for (let i = currentHour; i < 23; i++) {
    arr.push(i + 1);
  }
  return arr;
}

const getDaysOptions = () => {
  const now = new Date();
  
  return [
    getFormatDate(now),
    getFormatDate(new Date(now.getTime() + ONE_DAY_MS)),
    getFormatDate(new Date(now.getTime() + ONE_DAY_MS * 2)),
    getFormatDate(new Date(now.getTime() + ONE_DAY_MS * 3))
  ];
}

//COMPONENT
const UncontactDeliveryBlock = ({ onChange, checked }) => {
  return (
   <div className={classes.uncontactWrapper}>
    <div className={classes.uncontactDelivery}>
      <CheckboxInput id="contact" onChange={onChange} checked={checked}/>
      <span>Бесконтактная доставка</span>
    </div>
    
    <p className={classes.description}>Курьер передаст ваш заказ на безопасном расстоянии.
      Обратите внимание: данная функция работает только при оплате онлайн
    </p>
  </div>
  )
}

//ORDERING COMPONENT

const Ordering = ({basketArr, totalPrice}) => {
  const [nameInputValue, setNameInputValue] = useState({value: '', isValid: false, isTouched: false});
  const [phoneInputValue, setPhoneInputValue] = useState({value: '+375', isValid: false, isTouched: false});
  const [streetInputValue, setStreetInputValue] = useState({value: '', isValid: false, isTouched: false});
  const [houseInputValue, setHouseInputValue] = useState({value: '', isValid: false, isTouched: false});
  const [flatInputValue, setFlatInputValue] = useState({value: '', isValid: false, isTouched: false});

  const [commentInputValue, setCommentInputValue] = useState('');
  
  const [hourDropdawnValue, sethourDropdawnValue] = useState('bye');
  const [dayDropdawnValue, setDayDropdawnValue] = useState(getFormatDate(new Date()));
  const [minutDropdawnValue, setminutDropdawnValue] = useState('0');

  const [isClosestDelivery, setIsClosestDelivery] = useState(true);

  const [isUnContactDelivery, setIsUnContactDelivery] = useState(false);

  const [payRadioButtonValue, setPayRadioButtonValue] = useState('Картой курьеру');

  const [successfulOrder, setSuccessfulOrder] = useState(false);

  const unContactCheckboxHandler = (event) => {
    const isChecked = event.target.checked;
    
    setIsUnContactDelivery(isChecked);  
  }
  
  const nameInputHandler = (event) => {
    const currentValue = event.target.value;
    
    const result = {
      value: currentValue,
      isValid: currentValue.trim().length > 1,
      isTouched: true
    };

    setNameInputValue(result);
  }

  const phoneInputHandler = (event) => {
    setPhoneInputValue((state) => ({...state, isTouched: true}));

    const currentValue = event.target.value;

    if (currentValue.startsWith('+375')) {
      let isValid = false;
      if(currentValue.length === 13) {
        const phoneNumber = currentValue.substring(1);
        isValid = !isNaN(Number(phoneNumber));
      }
      
      setPhoneInputValue((state) => ({
        ...state,
        value: currentValue,
        isValid: isValid
      }));
    }
  }

  const commentInputHandler = (event) => {
    const currentValue = event.target.value;
    setCommentInputValue(currentValue);
  }

  //ADDRESS
  const streetInputHandler = (event) => {
    const currentValue = event.target.value;
    const result = {
      value: currentValue,
      isValid: currentValue.trim().length > 2,
      isTouched: true
    }

    setStreetInputValue(result);
  }

  const houseInputHandler = (event) => {
    const currentValue = event.target.value;
    const result = {
      value: currentValue,
      isValid: currentValue.trim().length > 0,
      isTouched: true
    };
    
    setHouseInputValue(result);
  }

  const flatInputHandler = (event) => {
    const currentValue = event.target.value;
    const result = {
      value: currentValue,
      isValid: currentValue.trim().length > 0,
      isTouched: true
    };

    setFlatInputValue(result);
  }
  //closest delivery checkbox
  const closestDeliveryHandler = (event) => {
    const isChecked = event.target.checked;
    setIsClosestDelivery(isChecked);
  }
  //dropdawn
  const hourDropdawnHandler = (event) => {
    const selectedValue = event.target.value;
    sethourDropdawnValue(selectedValue);
  }
  const minutDropdawnHandler = (event) => {
    const selectedValue = event.target.value;
    setminutDropdawnValue(selectedValue);
  }
  const dayDropdawnHandler = (event) => {
    const selectedValue = event.target.value;
    setDayDropdawnValue(selectedValue);
  }
  //radioButton
  const payRadioButtonHandler = (event) => {
    const selectedValue = event.target.value;
    setPayRadioButtonValue(selectedValue);
  }

  const nameInput = <TextInput value={nameInputValue.value} isValid ={nameInputValue.isValid} isTouched={nameInputValue.isTouched}  onChange={nameInputHandler} placeHolder={''} />
  const phoneNumberInput = <TextInput value={phoneInputValue.value} isValid ={phoneInputValue.isValid} isTouched={phoneInputValue.isTouched} onChange={phoneInputHandler}/>

  const streetInput = <TextInput value={streetInputValue.value} isValid ={streetInputValue.isValid} isTouched={streetInputValue.isTouched} onChange={streetInputHandler} placeHolder={''} />
  const houseInput = <TextInput value={houseInputValue.value} isValid ={houseInputValue.isValid} isTouched={houseInputValue.isTouched} onChange={houseInputHandler} placeHolder={''} />
  const flatInput = <TextInput value={flatInputValue.value} isValid ={flatInputValue.isValid} isTouched={flatInputValue.isTouched} onChange={flatInputHandler} placeHolder={''} />

  const commentInput = <TextInput value={commentInputValue} onChange={commentInputHandler} placeHolder={''} />

  const isToday = getFormatDate(new Date()) === dayDropdawnValue;
  const hourDropdawn = <DropdawnInpupt options={getHoursOptions(isToday)} onChange={hourDropdawnHandler} value={hourDropdawnValue}/>
  const minDropdawn = <DropdawnInpupt options={['0','15','30','45']} onChange={minutDropdawnHandler} value={minutDropdawnValue}/>
  const dayDropdawn = <DropdawnInpupt options={getDaysOptions()} value={dayDropdawnValue} onChange={dayDropdawnHandler} />

  const closestDeliveryCheckbox = <CheckboxInput id="delivery" onChange={closestDeliveryHandler} checked={isClosestDelivery}/>
  
  const onSubmitHandler = (event) => {
    event.preventDefault();

    setNameInputValue((state) => ({
      ...state,
      isTouched: true
    }));
    setPhoneInputValue((state) => ({
      ...state,
      isTouched: true
    }));
    setStreetInputValue((state) => ({
      ...state,
      isTouched: true
    }));
    setHouseInputValue((state) => ({
      ...state,
      isTouched: true
    }));
    setFlatInputValue((state) => ({
      ...state,
      isTouched: true
    }));

    const validationArr = [nameInputValue.isValid, phoneInputValue.isValid, streetInputValue.isValid, houseInputValue.isValid, flatInputValue.isValid];
    const isFormInvalid = validationArr.includes(false);
    if (isFormInvalid) {
      window.scrollTo(0, 0);
      return;
    }

    const orderdeliveryTime = isClosestDelivery ? 'ближайшее' : `${dayDropdawnValue} ${hourDropdawnValue}:${minutDropdawnValue}`;
    const orderedItems = basketArr.map((item) => {
      const newItem = {
        amount: item.amount,
        id: item.id,
        title: item.title
      };
      return newItem;
    });

    const order = {
      name: nameInputValue.value,
      address: {
        street: streetInputValue.value,
        house: houseInputValue.value,
        flat: flatInputValue.value 
      },
      comment: commentInputValue,
      deliveryTime: orderdeliveryTime,
      unContactDelivery: isUnContactDelivery,
      paymentMethod: payRadioButtonValue,
      order: orderedItems,
      price: totalPrice,
      time: new Date().toGMTString(),
    }
    const makeOrderPromise = addOrderToFirebase(order);
    makeOrderPromise
      .then((response) => response.json())
      .then(() => {
        setSuccessfulOrder(true);
      });
  }

  const isbasketEmpty = basketArr.length === 0;

  return (
    <div className={classes.wrapper}>
      <div className={classes.leftOrderDetails}>
        <div className={classes.header}>Оформление заказа</div>

        <form onSubmit={onSubmitHandler}>
          <WithLabel label='Имя' component={nameInput} />
          <WithLabel label='Телефон' component={phoneNumberInput} />
          <div className={classes.adresBlock}>
            <div className={classes.adresssHeader}>Aдрес :</div>
            <WithLabel label='Улица' component={streetInput} />
            <div className={classes.adreswrapper}>
              <WithLabel label='Дом' component={houseInput} />
              <WithLabel label='Квартира' component={flatInput} />
            </div>
          </div>
          <WithLabel label='Комментарий к заказу' component={commentInput}/>

          <div className={classes.deliveryBlock}>
            { 
              isClosestDelivery ?  null : (
                <> 
                    <WithLabel label='Час' component={hourDropdawn}/>
                    <WithLabel label='Минуты' component={minDropdawn}/>
                    <WithLabel label='Число' component={dayDropdawn} />
                </>
              )
            }
            <div className={classes.closestDeliveryCheckbox}> 
              {closestDeliveryCheckbox}
              <span>Ближайшее </span>
            </div>
      
          </div>          

          <UncontactDeliveryBlock checked={isUnContactDelivery} onChange={unContactCheckboxHandler}/>
          <RadioButton
            title={'Способ оплаты'}
            checked={payRadioButtonValue}
            onChange={payRadioButtonHandler}
            values={['Наличными курьеру','Картой курьеру','Онлайн через ЕРИП']}
          />

          <div className={classes.totalPriceTitle}>{`Итого к оплате : ${totalPrice} руб`}</div>

          {
            successfulOrder ? (
              <div className={classes.successfulOrder}>
                Ваш заказ принят в обработку <span className={classes.check}> &#10003;</span>
              </div>
            ) : (
              <button
                type='submit'
                disabled={isbasketEmpty}
                className={classes.orderButton}
              >
                Оформить заказ
              </button>
            )
          }

        </form>
      </div>
      <div className={classes.rightOrderDetails}> 
        <span>Состав заказа </span>
        <OrderList />
      </div>
    </div>
  );
}

function mapStateToProps (state) {
  return {
    basketArr: state.basket,
    totalPrice: state.totalPrice
  };
}

export default connect(mapStateToProps, null)(Ordering);
