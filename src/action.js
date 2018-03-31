/**
 * Action
 */
class Action {
  /**
   * @returns {undefined}
   * @param {string} transitionName
   * @param {Array} expectedInputs
   * @param {Function} validationFunc
   */
  constructor(transitionName, expectedInputs, validationFunc = () => true) {
    if (typeof validationFunc !== 'function') {
      throw new TypeError('expected a function');
    }

    if (!this.isStringArray(expectedInputs)) {
      throw new TypeError('expect an array of strings');
    }

    this.expectedInputs = expectedInputs;
    this.transitionName = transitionName;
    this.validate = validationFunc;
  }

  /**
   * @return {string} transitionName
   * @param {Object} inputs
   */
  getTransition(inputs) {
    const isAction = this.expectedInputs.reduce((accumulator, input) => {
      const hasProperty = Object.prototype.hasOwnProperty.call(inputs, input);
      return accumulator && hasProperty;
    }, true);

    return isAction && this.validate(inputs) ? this.transitionName : '';
  }

  /**
   * @param {Array} arr
   * @return {boolean} isStringArray
   */
  isStringArray = (arr = []) => {
    if (!Array.isArray(arr)) return false;
    if (arr.length < 1) return false;

    return arr.every(item => {
      return typeof item === 'string';
    });
  };
}

export default Action;
