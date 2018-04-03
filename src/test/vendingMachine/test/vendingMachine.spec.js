import fsm from '../index';

describe('vending machine with on cash', () => {
  describe('user has only 5naira', () => {
    it('should move to five naira state when amount entered is 5 ', () => {
      fsm.input({ amount: 5 });
      expect(fsm.currentState).toBe('fiveNaira');
    });
    it('should move to ten naira state ', () => {
      fsm.input({ amount: 5 });
      expect(fsm.currentState).toBe('tenNaira');
    });
    it('should move to fifteen naira state ', () => {
      fsm.input({ amount: 5 });
      expect(fsm.currentState).toBe('fifteenNaira');
    });
    it('should do nothing when in twenty naira state ', () => {
      fsm.input({ amount: 5 });
      expect(fsm.currentState).toBe('twentyNaira');
    });
  });
  describe('user has only 10naira', () => {
    it('should move to ten naira state when amount entered is 10 ', () => {
      fsm.transition('toNoCash');
      fsm.input({ amount: 10 });
      expect(fsm.currentState).toBe('tenNaira');
    });
    it('should move to twenty naira state when amount entered is 10 ', () => {
      fsm.input({ amount: 10 });
      expect(fsm.currentState).toBe('twentyNaira');
    });
  });
  describe('user has 15naira and 5naira', () => {
    it('should move to ten naira state when amount entered is 15 ', () => {
      fsm.transition('toNoCash');
      fsm.input({ amount: 15 });
      expect(fsm.currentState).toBe('fifteenNaira');
    });
    it('should move to twenty naira state when amount entered is 5 ', () => {
      fsm.input({ amount: 5 });
      expect(fsm.currentState).toBe('twentyNaira');
    });
  });
  describe('user has twentyNaira', () => {
    it('should move to twenty naira state when amount entered is 20 ', () => {
      fsm.transition('toNoCash');
      fsm.input({ amount: 20 });
      expect(fsm.currentState).toBe('twentyNaira');
    });
  });
});
