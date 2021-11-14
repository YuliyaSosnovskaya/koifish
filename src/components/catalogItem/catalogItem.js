import {Link} from 'react-router-dom';
import classes from './catalogItem.module.css';
import Card from '../../shared/card/card';

const CatalogItem = ({to, img, title}) => (
  <Link to={to} >
    <Card>
      <img className={classes.img} src={img} alt='susi' /> 
      <div className={classes.title}>
        {title}
      </div>
    </Card>
  </Link> 
);

export default CatalogItem;
