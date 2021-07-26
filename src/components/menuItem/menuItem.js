import Card from "../../shared/card/card";

import classes from './menuItem.module.css';

const MenuItem = ({title, img, description, price}) => {
  return (
    <Card>
      <div className={classes.menuItem}>
        <img src={img} alt={title}/>
        <div className={classes.bottomDetails}>
          <div className={classes.descdiv}>
            <span className={classes.title}>{title}</span>
            <span className={classes.description}>{description}</span>
          </div>
          
          <div>
            <span className={classes.price}>{price} руб</span>
            <button className={classes.button}>В корзину</button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default MenuItem;
