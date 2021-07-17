import {useParams} from 'react-router-dom';

const Rolls = () => {
  const { rollId } = useParams();
  return (
    <span>{rollId}</span>

  )
}
export default Rolls;