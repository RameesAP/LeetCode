/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const arr = [5, 4, 1, 2, 3]
const fn = x => x * 2

function sortBy(arr,fn){
    return arr.slice().sort((a,b)=> fn(a) - fn(b));
}

const sortedArr = sortBy(arr,fn);
console.log(sortedArr)