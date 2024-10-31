/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    currentCount =n
    return function() {
        return currentCount++
    };
};
createCounter(10)

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */