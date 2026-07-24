const reverseString = function (str) {
  let length = Number(str.length);
  let i = length - 1;
  let reversedStr = "";
  while (i >= 0) {
    reversedStr = reversedStr + str[i];
    i--;
  }
  return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
