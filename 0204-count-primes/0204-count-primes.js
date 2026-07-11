/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let primes = new Array(n).fill(true);
    let count = 0

    for (let i = 2; i <= n; i++) {
        if (primes[i]) {
            count++
            for (let j = 2 * i; j <= n; j = j + i) {
                primes[j] = false;
            }
        }
    }
    return count;
};