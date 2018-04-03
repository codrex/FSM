import Action from '../../../action';
import State from '../../../state';

// validators
const isFiveNaira = input => input.amount === 5;
const isTenNaira = input => input.amount === 10;

// transitions
const toFifteenNaira = {
  name: 'toFifteenNaira',
  from: 'tenNaira',
  to: 'fifteenNaira'
};
const toTwentyNaira = {
  name: 'toTwentyNaira',
  from: 'tenNaira',
  to: 'twentyNaira'
};

// actions
const onFiveNairaEntered = new Action(
  'toFifteenNaira',
  ['amount'],
  isFiveNaira
);
const onTenNairaEntered = new Action('toTwentyNaira', ['amount'], isTenNaira);

// state
const tenNaira = new State(
  [toFifteenNaira, toTwentyNaira],
  [onFiveNairaEntered, onTenNairaEntered]
);

export default tenNaira;
