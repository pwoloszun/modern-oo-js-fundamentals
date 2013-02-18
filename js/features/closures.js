// Wywoła funkcję fn i-razy
function times(i, fn) {
}

// Wywoła funkcję fn i-razy, z dowolna przekazana iloscia parametrow
// timesWithArgs(i, fn) => i * fn()
// timesWithArgs(i, fn, arg1) => i * fn(arg1)
// timesWithArgs(i, fn, arg1, arg2, ...) => i * fn(arg1, arg2, ...)
function timesWithArgs(i, fn) {
}

// Zwraca tablicę obiektow, bedaca wynikiem wywolania funkcji transformujacej fn na elementach tablicy array
// Przyklady:
// - ["Kate", "Bob"] tablica powitań
// - [1, 2, 3] kwadraty liczb
function map(array, fn) {
}

// iteruje po tabicy obiektow array i zwraca tablice tylko tych obiektow ktore zdaly "test prawdy" fn
// Przyklady:
// [2,5,8,13] - tylko liczby parzyste
// ["Kate", "Bob", "John", "Izydor", "Aron"] - tylko imiona zawierajace literę "a" lub "A"
function filter(array, fn) {
}

// Przeszukuje tablice array w poszukiwaniu pierwszego elementu spelniajacego test prawdy fn, i zwaraca element lub null
// Przyklady:
// [2,5,8,13] - liczba podzielna przez 7 => null
// ["Kate", "Bob", "John", "Izydor", "Aron"] - imie zawierajace literę "a" lub "A" => "Kate"
function find(array, fn) {
}

// Zwraca tablicę unikalnych wartosci fn(el) dla kazdego elementu el w tablicy array
function uniq(array, fn) {
}
