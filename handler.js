export default class Handler {

  handle(data, aggregator) {
    if (data === null || data === undefined) {
      throw "Data parameter is not defined!";
    }

    let command = data["command"]
    if (command !== undefined) {
      let fn = this[`on${command.charAt(0).toUpperCase()}${command.substr(1)}`]
      if (typeof fn === 'function') {
        return fn.apply(null, [data, null])
      }
    }
    return false;
  }

  onCreate(data, aggregator) {
    return true;
  }
};