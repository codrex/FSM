/**
 * Machine class
 */
class Machine {
  /**
   * @param {Object} states
   * @param {string} currentMachineState
   */
  constructor(states, currentMachineState) {
    this.states = { ...states };
    let currentStateObject = this.setState(currentMachineState, true);

    this.getCurrentStateObject = () => {
      return currentStateObject;
    };

    this.setCurrentStateObject = state => {
      currentStateObject = this.setState(state);
    };

    this.currentState = currentMachineState;
  }

  /**
   * @param {string} state
   * @param {bool} isInitialState
   * @return {Object} current state object or an error object
   */
  setState = (state, isInitialState) => {
    const type = typeof state;
    if (type !== 'string') {
      return new Error('expected a string for initial but got ' + type);
    }

    if (isInitialState) {
      const keys = Object.keys(this.states); //eslint-disable-line
      return keys.length > 0
        ? this.states[keys[0]]
        : new Error('state machine must have at least on state');
    }

    const stateObject = this.states[state];
    if (stateObject) {
      return stateObject;
    }
    return new Error('destination state is invalid');
  };

  /**
   * @return {any} any value return from onLeaveState function
   */
  handleLeaveState = () => {
    const onLeaveState = this.getCurrentStateObject().onLeaveState;
    if (onLeaveState) {
      return onLeaveState();
    }
  };

  /**
   * @return {any} any value return from onEnterState function
   */
  handleEnterState = () => {
    const onEnterState = this.states[this.getCurrentStateObject()].onEnterState;
    if (onEnterState) {
      return onEnterState();
    }
  };

  /**
   *
   * @param {string} transitionName
   * @param {Function} callBack
   * @return {undefined}
   */
  transition = transitionName => {
    const currentState = this.getCurrentStateObject();
    const nextTransition =
      currentState.getTransitions() &&
      currentState.getTransitions()[transitionName];

    if (nextTransition) {
      this.setCurrentStateObject(nextTransition.to);
      this.currentState = nextTransition.to;
      this.previousState = nextTransition.from;
    }
  };
}

export default Machine;
