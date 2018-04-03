import Machine from '../../machine';
import {
  fifteenNaira,
  tenNaira,
  twentyNaira,
  fiveNaira,
  noCash
} from './states';

const fsm = new Machine(
  {
    fifteenNaira,
    tenNaira,
    fiveNaira,
    twentyNaira,
    noCash
  },
  'noCash'
);

export default fsm;
