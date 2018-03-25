/**
 * Machine class
 */
class Machine {
  /**
   * @param {Object} states
   * @param {string} machineState
   */
  constructor(states, machineState) {
    this.states = { ...states };
    let currentState = machineState;
    this.getCurrentState = () => {
      return currentState;
    };
    this.setCurrentState = state => {
      currentState = state;
    };
  }

  /**
   * @return {undefined}
   * @param {Object} transition
   */
  updater = transition => {
    this.setCurrentState(transition.to);
  };

  /**
   *
   * @param {string} transitionName
   * @param {Function} callBack
   * @return {undefined}
   */
  transition = (transitionName, callBack) => {
    const currentState = this.states[this.getCurrentState()];
    currentState.setUpdater(this.updater);
    return currentState.doTransition(transitionName, callBack);
  };
}

export default Machine;
