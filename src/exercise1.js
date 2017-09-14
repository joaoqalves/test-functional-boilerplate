export const level3Function = (numbers) => {
    let [first, second, ...rest] = numbers.map(x => x * 2 * 10);
    return {
        first: first,
        second: second,
        rest: rest
    }
}