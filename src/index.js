module.exports = function check(str, bracketsConfig) {
  let conf = bracketsConfig.map( (elem) => ( /\d/.test(bracketsConfig[0][0]) )?`${elem.join('')}`:`\\${elem.join('\\')}` ).join('|');
  let RE = new RegExp(conf, 'g');
  let currentStr = str;

  while ( RE.test(currentStr) ) {
    currentStr = currentStr.replace( RE, '');
  }
  return !Boolean(currentStr);
}
