exports.capitalizeAndSpace = str => {
  var split = str.split('-');
  for (var i = 0; i < split.length; i++) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
  }
  return split.join(' ');
};
