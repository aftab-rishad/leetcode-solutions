/**
 * @param {number} num
 * @return {boolean}
 */
var completePrime = function (num) {
    const isPrime = (n) => {
        if (n < 2) return false;

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }

        return true;
    };

    let left = String(num);
    let right = String(num);

    while (left.length > 0) {
        if (!isPrime(Number(left))) {
            return false;
        }

        left = left.slice(1);
    }

    while (right.length > 0) {
        if (!isPrime(Number(right))) {
            return false;
        }

        right = right.slice(0, -1);
    }

    return true;
};