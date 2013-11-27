/*
 * Calls given function fn as many number many times
 * Usage:
 * var number = 5;
 * number.times(function(i) {
 *   log(i);
 * });
 * */
function times(fn) {
}

/*
 * Calls function fn for each element of array
 * Usage:
 * [1,2,3].each(function(i) {
 *   log(i);
 * }) => logs on console: 1, 2, 3
 * */
function each(fn) {
}

/*
 * Maps array using function fn
 * Usage:
 * ["Kate", "Bob"].map(function(name) {
 *   return "Hello " + name;
 * }) => ["Hello Kate", "Hello Bob"]
 * */
function map(fn) {
}

// iteruje po tabicy obiektow array i zwraca tablice tylko tych obiektow ktore zdaly "test prawdy" fn
// Przyklady:
// [2,5,8,13] - tylko liczby parzyste
// ["Kate", "Bob", "John", "Izydor", "Aron"] - tylko imiona zawierajace literę "a" lub "A"
/*
 * Filters array using boolean function fn and returns new instance
 * containing only filtered elements
 * Usage:
 * [1,2,3,4].filter(function(i) {
 *  return i % 2 === 0;
 * }) => [2, 4]
 *
 * ["Kate", "Bob", "Ed", "Ben"].filter(function(name) {
 *  return name[0] === "B";
 * }) => ["Bob", "Ben"]
 * */
function filter(fn) {
}


/*
 * Checks if all elements of array satisfy conditions of boolean function fn
 * Usage:
 * [1, 2, 3].all(function(i) {
 *   return i % 2 === 0;
 * }) => false
 *
 * ["Bob", "Ben", "Bison"].all(function(name) {
 *   return name[0] === "B";
 * }) => true
 * */
function all(fn) {
}

function find(array, fn) {
}

function uniq(fn) {
}
