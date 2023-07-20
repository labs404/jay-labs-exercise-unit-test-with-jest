// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))


const fromDollarToYen = (dollarAmount) => {
    return ((dollarAmount / 1.2) * 127.9);
};
const fromEuroToDollar = (euroAmount) => {
    return (euroAmount * 1.2);
};
const fromYenToPound = (yenAmount) => {
    return ((yenAmount / 127.9) * 0.8);
};

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };