// import the sum function from the app.js file.
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// start the first test.
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("10 euros should be 12 dollars", () => {
    let dollars = fromEuroToDollar(10);
    expect(dollars).toBe(12);
});

test("12 dollars should be 1,279 yen", () => {
    let yen = fromDollarToYen(12);
    expect(yen).toBe(1279);
});

test("1,279 yen should be 8 pounds", () => {
    let pounds = fromYenToPound(1279);
    expect(pounds).toBe(8);
});