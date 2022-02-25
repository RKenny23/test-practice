function caesarCipher(str, shift) {

  if (shift < 0) shift = shift + 26;
  let result = str.replace(/[a-z]/g,
    x => String.fromCharCode((x.charCodeAt(0) - 97 + shift) % 26 + 97));

  result = result.replace(/[A-Z]/g,
    x => String.fromCharCode((x.charCodeAt(0) - 65 + shift) % 26 + 65));

  return result;
}

module.exports = caesarCipher;