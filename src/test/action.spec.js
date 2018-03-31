import Action from '../action';

// const action = new Action('A2B', ['A']);
const validationFunction = input => {
  return input.A === 'A';
};

describe('Action class', () => {
  it('should create an instance of class Action ', () => {
    const action = new Action('A2B', ['A']);
    expect(action).toBeInstanceOf(Action);
  });
  it('should transition name when getTransition', () => {
    const action = new Action('A2B', ['A']);
    expect(action.getTransition({ A: '' })).toBe('A2B');
  });

  it('should transition name when validation function return false', () => {
    const action = new Action('A2B', ['A'], validationFunction);
    expect(action.getTransition({ A: 'B' })).toBe('');
  });

  it('should transition name when validation function return true', () => {
    const action = new Action('A2B', ['A'], validationFunction);
    expect(action.getTransition({ A: 'A' })).toBe('A2B');
  });

  it('should throw an error when validation function is invalid', () => {
    const error = new TypeError('expected a function');
    expect(() => {
      const action = new Action('A2B', ['A'], null); // eslint-disable-line
    }).toThrow(error);
  });

  it('should throw an error when expect inputs is not array of string', () => {
    const error = new TypeError('expect an array of strings');
    expect(() => {
      const action = new Action('A2B', [1], validationFunction); // eslint-disable-line
    }).toThrow(error);
  });

  it('should throw an error when expect inputs is not array ', () => {
    const error = new TypeError('expect an array of strings');
    expect(() => {
      const action = new Action('A2B', 'B', validationFunction); // eslint-disable-line
    }).toThrow(error);
  });

  it('should throw an error when expect inputs array is empty ', () => {
    const error = new TypeError('expect an array of strings');
    expect(() => {
      const action = new Action('A2B', [], validationFunction); // eslint-disable-line
    }).toThrow(error);
  });

  it('should transition name when input is not a string', () => {
    const action = new Action('A2B', ['A'], validationFunction);
    expect(action.getTransition({ A: 1 })).toBe('');
  });
});
