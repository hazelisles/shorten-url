function randomAlpha(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

module.exports = function generateRandomCode() {
  const lcl = 'abcdefghijklmnopqrstuvwxyz'
  const ucl = lcl.toUpperCase()
  const num = '0123456789'
  const collection = Array.from(lcl).concat(ucl.split(''), num.split(''))
  let code = ''
  for (let i = 0; i < 5; i++) {
    code += randomAlpha(collection)
  }
  return code
}