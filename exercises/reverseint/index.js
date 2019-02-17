// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reversed = n.toString().split('').reverse().join('')
    return parseInt(reversed) * Math.sign(n)
    // Math.sign returns 1 for positive number and -1 for negative number
}

module.exports = reverseInt;
