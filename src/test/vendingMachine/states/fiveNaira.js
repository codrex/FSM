import Action from '../../../action';
import State from '../../../state';

// validators
const isFiveNaira = input => input.amount === 5;
const isTenNaira = input => input.amount === 10;
const isfifteenNaira = input => input.amount === 15;

// transitions
const toTenNaira = { name: 'toTenNaira', from: 'fiveNaira', to: 'tenNaira' };
const toFifteenNaira = {
  name: 'toFifteenNaira',
  from: 'fiveNaira',
  to: 'fifteenNaira'
};
const toTwentyNaira = {
  name: 'toTwentyNaira',
  from: 'fiveNaira',
  to: 'twentyNaira'
};

// actions
const onFiveNairaEntered = new Action('toTenNaira', ['amount'], isFiveNaira);
const onTenNairaEntered = new Action('toFifteenNaira', ['amount'], isTenNaira);
const onFifteenNairaEntered = new Action(
  'toTwentyNaira',
  ['amount'],
  isfifteenNaira
);

// state
const fiveNaira = new State(
  [toTenNaira, toFifteenNaira, toTwentyNaira],
  [onFifteenNairaEntered, onFiveNairaEntered, onTenNairaEntered]
);

export default fiveNaira;
