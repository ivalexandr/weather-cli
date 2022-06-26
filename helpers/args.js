export const getArgs = args => {
  const [, , ...rest] = args
  return rest.reduce((acc, item, index, array) => {
    if (item[0] === '-') {
      if (index === array.length - 1) {
        acc[item.substring(1)] = true
      } else if (array[index + 1][0] !== '-') {
        acc[item.substring(1)] = array[index + 1]
      } else {
        acc[item.substring(1)] = true
      }
    }
    return acc
  }, {})
}
