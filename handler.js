export default class Handler {

  handle(data, aggregator) {
    if (data === null || data === undefined) {
      throw "Data parameter is not defined!";
    }
    if (data["command"] !== undefined) {
      return this[`on${data["command"]}`].apply(null, [data, null])
    }
    return false;
  }

  oncreate(data, aggregator) {
    return true;
  }
};