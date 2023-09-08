export default class Validator {
  static validateUsername(nickname) {
    return /^(?![_\d-])(?!.*[\d]{3,})(?!.*[-\d_]$)[\w_-]*$/gi.test(nickname);
  }
}
