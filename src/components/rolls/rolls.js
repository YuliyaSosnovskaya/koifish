import { useParams } from 'react-router-dom';
import { useEffect , useState} from 'react';

import { getRollFromFirebase } from '../../utils';
import MenuItem from '../menuItem/menuItem';

const Rolls = () => {
  const { rollId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const responsePromise = getRollFromFirebase(rollId);
    responsePromise
      .then((response) => response.json())
      .then((data) => {
        const result = Object.keys(data).map((key) => {
          return {
            id: key,
            description: data[key].description,
            img: data[key].img,
            price: data[key].price,
            title: data[key].title
          }
        })
        setItems(result);
      });
    
  }, [rollId]);

  return items.map((item) => (
    <MenuItem 
      key={item.id}
      title={item.title}
      img={item.img}
      description={item.description}
      price={item.price}
      id={item.id}
    />
  ));
}

export default Rolls;
