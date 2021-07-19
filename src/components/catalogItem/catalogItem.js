import classes from './catalogItem.module.css';
import susiImg from '../../img/mainsusi2.jpg';

const CatalogItem = () => {
  return (
    <div className={classes.catalogItem}>
      <img src={susiImg} alt='susi'/> 
      
      <div className={classes.title}>
        Суши
      </div>
    </div>
  )
}

export default CatalogItem;