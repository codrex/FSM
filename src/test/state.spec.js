import State from '../state';
import Action from '../action';

const a2b = new Action('A2B', ['B']);
const a2c = new Action('A2C', ['C']);

const state = new State(
  [{ name: 'A2B', to: 'B', from: 'A' }, { name: 'A2C', to: 'C', from: 'A' }],
  [a2b, a2c]
);

describe('State', () => {
  it('should return A2B when B is passed in as input', () => {
    expect(state.getTransitionName({ B: 'b' })).toBe('A2B');
  });
  it('should return A2C when C is passed in as input', () => {
    expect(state.getTransitionName({ C: 'c' })).toBe('A2C');
  });
});
