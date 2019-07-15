// eslint-disable-next-line no-extend-native,func-names
String.prototype.humanize = function () {
  return this.replace(/(?:_| |\b)(\w)/g, (key, p1) => p1.toUpperCase());
};
