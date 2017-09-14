export const sum = (...items) => items.reduce((total, current) => {
  return total + current;
})

export const mult = (...items) => items.reduce((total, current) => total * current)

export const sumAndMultiply = (...items) => mult(sum(...items))

export const multiplyAndSum = (...items) => sum(mult(...items))