import classes from './catalogItem.module.css';
import susiImg from '../../img/mainsusi2.jpg';
import Card from '../../shared/card/card';

const CatalogItem = () => {
  return (
    <Card>
      <img src={susiImg} alt='susi' /> 
      <div className={classes.title}>
        Суши
      </div>
    </Card>
  )
}

export default CatalogItem;
