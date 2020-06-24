import { useSelector } from 'react-redux';
import createRouter from './Routes';

export default () => {
  // console.disableYellowBox = true;
  const filters = useSelector((state) => state.filters);
  return createRouter(filters);
};
