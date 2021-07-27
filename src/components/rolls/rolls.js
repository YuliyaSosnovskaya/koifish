import { useParams } from 'react-router-dom';
import { useEffect , useState} from 'react';
import MenuItem from '../menuItem/menuItem';

// state = items ([])

// в componentDidMount сделать на основе rollId fetch
// и полученный ответ преобразовать в массив и сохранить в state items
// перевызывать fetch каждый раз когда меняется  rollId и перезаписывать state

const Rolls = () => {
  const { rollId } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const responsePromise = fetch(`https://koifish-21741-default-rtdb.europe-west1.firebasedatabase.app/${rollId}.json`);
    responsePromise
      .then((response) => response.json())
      .then((data) => {
        const result = Object.keys(data).map((key) => {
          return {
            id: key,
            description: data[key].description,
            img: data[key].img,
            price:data[key].price,
            title: data[key].title
          }
        })
        setItems(result);
      });

    
  }, [rollId])
  return (
    <>
      {
        items.map((item) => (
          <MenuItem 
            key={item.title}
            title={item.title}
            img={item.img}
            description={item.description}
            price={item.price}
            onAdd={() => { console.log(item); }}
          />
        ))
      }
    </>
  )
}

export default Rolls;
