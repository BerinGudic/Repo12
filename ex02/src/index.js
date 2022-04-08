function myCounter(n) {
    if (n < 1) {
        return [];
    } else {
        const counter = myCounter(n - 1);
        counter.push(n);
        return counter;
    }
}

console.log(myCounter(0));
module.exports = myCounter;