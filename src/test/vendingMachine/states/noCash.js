import Action from '../../../action';
import State from '../../../state';

// validators
const isFiveNaira = input => input.amount === 5;
const isTenNaira = input => input.amount === 10;
const isFifteenNaira = input => input.amount === 15;
const isTwentyNaira = input => input.amount === 20;

// transitions
const toFiveNaira = { name: 'toFiveNaira', from: 'noCash', to: 'fiveNaira' };
const toTenNaira = { name: 'toTenNaira', from: 'noCash', to: 'tenNaira' };
const toFifteenNaira = {
  name: 'toFifteenNaira',
  from: 'noCash',
  to: 'fifteenNaira'
};
const toTwentyNaira = {
  name: 'toTwentyNaira',
  from: 'noCash',
  to: 'twentyNaira'
};

// actions
const onFiveNairaEntered = new Action('toFiveNaira', ['amount'], isFiveNaira);
const onTenNairaEntered = new Action('toTenNaira', ['amount'], isTenNaira);
const onFifteenNairaEntered = new Action(
  'toFifteenNaira',
  ['amount'],
  isFifteenNaira
);
const onTwentyEntered = new Action('toTwentyNaira', ['amount'], isTwentyNaira);

// state
const noCash = new State(
  [toTenNaira, toFifteenNaira, toTwentyNaira, toFiveNaira],
  [
    onFifteenNairaEntered,
    onFiveNairaEntered,
    onTenNairaEntered,
    onTwentyEntered
  ]
);

export default noCash;
