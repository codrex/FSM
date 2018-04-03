import Action from '../../../action';
import State from '../../../state';

// validators
const isFiveNaira = input => input.amount === 5;

// transitions
const toTwentyNaira = {
  name: 'toTwentyNaira',
  from: 'fifteenNaira',
  to: 'twentyNaira'
};

// actions
const onFiveNairaEntered = new Action('toTwentyNaira', ['amount'], isFiveNaira);

// state
const fifteenNaira = new State([toTwentyNaira], [onFiveNairaEntered]);

export default fifteenNaira;
