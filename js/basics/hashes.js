/*
 * It should check if given capital matches given country
 * Usage:
 * checkCountryCapital("Germany", "Berlin") => true
 * checkCountryCapital("Poland", "Cracow") => false
 * */
function checkCountryCapital(countryName, capitalName) {
}

Object.prototype.myMethod = function(param1, param2) {
  // this is a reference to object that called myMethod()
};

/*
 * Usage:
 * {name: "Bob", age: 22}.keys() => ['name', 'age']
 * */
function keys() {
}

/*
 * Usage:
 * {name: "Bob", age: 22}.values() => ["Bob", 22]
 * */
function values() {

}

/*
 * Removes hash pair by given key, and returns removed data as array
 * Usage:
 * var hash = {a: 1, b: 2, c: 3};
 * var removed = hash.deleteKey("b");
 * removed == ["b", 2] && hash == {a: 1, c: 3}
 *
 * */
function deleteKey(key) {
}

/*
 * Returns number of hash pairs
 * Usage:
 * {a: 123}.size() => 1
 * {}.size() => 0
 * */
function size() { // ({a: 1, b: 2, c: 3}) === 3
}

/*
 * Returns new hash instance, containing all pairs of original hash except given keys
 * Usage:
 * {a: 1, b: 2, c: 3}.except(["a", "c"]) => {b: 2}
 * */
function except(keys) {
}


function empty(hash) { // true/false

}

function flatten(hash) { // ({a: 123, b: "xxx"}) === ["a", 123, "b", "xxx"]

}

function hasKey(key) { // true/false

}

function hasValue(value) { // true/false

}

function merge(hash, otherHash) {

}

function reverseMerge(hash, otherHash) {

}

function deepMerge(hash, otherHash) {

}

function shift(hash) { // ({a: 1, b: 2, c: 3}) -> ["a", 1]; hash === {b: 2, c: 3}

}

function size(hash) { // ({a: 1, b: 2, c: 3}) === 3

}

function diff(hash, otherHash) {

}

function except(hash, keys) { // ({a: 1, b: 2, c: 3}, ["a", "c"]) === {b: 2}

}
