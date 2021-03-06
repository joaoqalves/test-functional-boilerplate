import { expect } from 'chai';
import { sum, mult, sumAndMultiply, multiplyAndSum } from './math.js';

describe('sum', () => {
  it('should add 1 + 1 to make two', () => {
    let result = sum(1,1);
    expect(result).to.equal(2);
  })

  it('should add 1 + 3 to make four', () => {
    let result = sum(1,3);
    expect(result).to.equal(4);
  })

  it('should add 2 + 3 + 7 to make 12', () => {
    let result = sum(2, 3, 7);
    expect(result).to.equal(12);
  })
})

describe('mult', () => {
  it('should multiply 1 * 1 to make 1', () => {
    let result = mult(1,1);
    expect(result).to.equal(1);
  })

  it('should multiply 1 * 3 to make X', () => {
    let result = mult(1, 3)
    expect(result).to.equal(3);
  })
})

describe('function composition', () => {
  it('should sum && multiply', () => {
    expect(sumAndMultiply(1, 2, 3, 4)).to.equal(10)
  })

  it('should multiply && sum', () => {
    expect(multiplyAndSum(1, 2, 3, 4)).to.equal(24)
  })
})