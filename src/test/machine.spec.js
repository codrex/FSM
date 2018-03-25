import Machine from '../machine';
import State from '../state';

const A = new State([{ name: 'A2B', from: 'A', to: 'B' }]);
const B = new State([{ name: 'B2A', from: 'B', to: 'A' }]);
const fsm = new Machine({ A, B }, 'A');

describe('Machine', () => {
  test('create a Machine Object', () => {
    expect(fsm).toBeInstanceOf(Machine);
  });
  test('expect A to be current state', () => {
    expect(fsm.getCurrentState()).toBe('A');
  });
  test('expect current state to be "B" after transition', () => {
    fsm.transition('A2B', () => true);
    expect(fsm.getCurrentState()).toBe('B');
  });
  test('expect transition not to occur when validation function returns false', () => {
    fsm.transition('B2A', () => false);
    expect(fsm.getCurrentState()).toBe('B');
  });
  test('expect transition not to occur when transition is not in current state', () => {
    fsm.transition('A2B');
    expect(fsm.getCurrentState()).toBe('B');
  });
  test('expect current state to be "A" after transition', () => {
    fsm.transition('B2A');
    expect(fsm.getCurrentState()).toBe('A');
  });
  test('expected to throw an error when name is not a string', () => {
    const error = new Error('transition name must be a value of type string');
    expect(() => {
      // eslint-disable-next-line
      const state = new State([{ name: 11, from: 'A', to: 'B' }]);
    }).toThrow(error);
  });
  test('expected to throw an error when name is string an empty string', () => {
    const error = new Error('transition name cannot be an empty string');
    expect(() => {
      // eslint-disable-next-line
      const state = new State([{ name: '     ', from: 'A', to: 'B' }]);
    }).toThrow(error);
  });
});
