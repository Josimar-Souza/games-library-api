class ErrorCreator {
  constructor(error, customMessage, status) {
    this.error = error;
    this.customMessage = customMessage;
    this.status = status;
  }
}

module.exports = ErrorCreator;
