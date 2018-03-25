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
    const transitions = stateTransitions;
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
   *
   * @param {string} transitionName
   * @param {Function} validationCB
   * @return {undefined}
   */
  doTransition(transitionName, validationCB) {
    const transitions = this.getTransitions();
    if (
      // eslint-disable-next-line
      transitions.hasOwnProperty(transitionName) &&
      (validationCB && validationCB())
    ) {
      this.FSMUpdater(transitions[transitionName]);
      // eslint-disable-next-line
    } else if (transitions.hasOwnProperty(transitionName)) {
      this.FSMUpdater(transitions[transitionName]);
    }
  }
}

export default State;
