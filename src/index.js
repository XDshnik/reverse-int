module.exports = function reverse (n) {
    (n<0) ? (n=(-1)*n) : n;
    return Number(n.toString().split('').reverse().join(''))
}
