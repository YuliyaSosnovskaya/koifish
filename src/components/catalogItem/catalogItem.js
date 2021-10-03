import {Link} from 'react-router-dom';
import classes from './catalogItem.module.css';
import Card from '../../shared/card/card';


const CatalogItem = (props) => {
  return (
    <Link to={props.to} >
      <Card>
        <img className={classes.img} src={props.img} alt='susi' /> 
        <div className={classes.title}>
          {props.title}
        </div>
      </Card>
    </Link>
   
  )
}

export default CatalogItem;
