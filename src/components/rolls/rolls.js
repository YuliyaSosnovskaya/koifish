import { useParams } from 'react-router-dom';

import { MENU_ITEMS } from '../../metadata/index';
import MenuItem from '../menuItem/menuItem';

const Rolls = () => {
  const { rollId } = useParams();
  const { items, pageTitle } = MENU_ITEMS[rollId];

  return (
    <>
        {
          items.map((item) => (
            <MenuItem 
              key={item.title}
              title={item.title}
              img={item.img}
              description={item.description}
              price={item.price}>
            </MenuItem>
          ))

        }
    </>
  )
}

export default Rolls;
