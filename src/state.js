/**
 * State
 */
class State {
  /**
   * @param {Object} stateTransitions
   * @param {Object} stateData
   * @return {undefined}
   */
  constructor(stateTransitions, stateData) {
    const transitions = this.createTransitionObject(stateTransitions);
    this.getTransitions = () => {
      return transitions;
    };
    this.stateDate = stateData || {};
  }

  /**
   *
   * @param {Function} updater
   * @return {undefined}
   */
  setUpdater(updater) {
    this.FSMUpdater = updater;
  }

  /**
   * @param {Array} transitions
   * @return {undefined}
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
   *
   * @param {string} transitionName
   * @param {Function} validationCB
   * @return {undefined}
   */
  doTransition(transitionName, validationCB) {
    const transitions = this.getTransitions();
    const hasOwnProperty = Object.prototype.hasOwnProperty.call(
      transitions,
      transitionName
    );

    if (hasOwnProperty && validationCB) {
      if (validationCB()) {
        return this.FSMUpdater(transitions[transitionName]);
      }
      return;
    }
    if (hasOwnProperty) {
      return this.FSMUpdater(transitions[transitionName]);
    }
  }
}

export default State;
