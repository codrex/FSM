/**
 * State
 */
class State {
  /**
   * @param {Object} stateTransitions
   * @param {Object} stateActions
   * @param {Object} stateData
   * @return {undefined}
   */
  constructor(stateTransitions, stateActions = [], stateData) {
    const transitions = this.createTransitionObject(stateTransitions);
    const actions = [...stateActions];
    this.getTransitions = () => {
      return { ...transitions };
    };

    this.getActions = () => {
      return actions;
    };

    this.stateDate = stateData || {};
    this.onEnterState = null;
    this.onLeaveState = null;
  }

  /**
   * @param {Array} transitions
   * @return {Object} stateTransitionObject
   */
  createTransitionObject = transitions => {
    if (transitions) {
      return transitions.reduce((accumulator, currentValue) => {
        const { name, ...rest } = currentValue;
        if (!name || typeof name !== 'string') {
          throw new Error('transition name must be a value of type string');
        }
        if (name.trim() === '') {
          throw new Error('transition name cannot be an empty string');
        }
        return { ...accumulator, [name]: { ...rest } };
      }, {});
    }
  };

  /**
   * @param {Object} inputs
   * @return {string}transition
   */
  getTransitionName = inputs => {
    const actions = this.getActions();

    for (let index = 0; index < actions.length; index += 1) {
      const transition = actions[index].getTransition(inputs);
      if (transition) {
        return transition;
      }
    }
    return '';
  };
}

export default State;
