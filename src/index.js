//  module.exports = function reverse(n) {
//          let digit, result = 0;

//          while (n) {
//              digit = n % 10;
//              result = (result * 10) + digit;
//              n = n / 10 | 0;
//          }

//          return result;
//      }
module.exports = function reverse(n) {
    const stringifietN = n.toString();
    let result = stringifietN.includes('-') ? stringifietN.slice(1) : stringifietN;
    return result.split('').reverse().join('');
}
