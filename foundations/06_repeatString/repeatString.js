const repeatString = function (str, num) {
  if (num < 0) {
    returnError;
  } else {
    let strings = "";
    let i = 0;
    while (i < num) {
      strings = strings + str;
      i++;
    }
    return strings;
  }
};

// Do not edit below this linea
module.exports = repeatString;
