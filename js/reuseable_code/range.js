// Konstruktor przyjmuje dwa parametry: start i end, definiujące poczatek i koniec obustronnie domknietego przedziału <start, end>
var range = new Range(10, 99);
var otherRange = new Range(-10, 20);

// Metoda include(value) - zwraca true jeśli zadana wartość value zawiera się w przedziale range
range.include(21); // => true
range.include(100); // => false

// Metoda length() - zwraca długość przedzialu
range.length(); // => 89

// Metoda intersect(otherRange) - zwraca true, jeśli przedział otherRange przecina w conajmniej jednym punkcie przedział range
range.intersect(otherRange); // => true

// Metoda equal(otherRange) - zwraca true jeśli otherRange reprezentuje taki sam przedzial
range.equal(otherRange); // => false


// Metoda intersectWith(otherRange) - zwraca nowy przedział newRange, bedacy wynikiem przecięcia sie przedziałów range oraz otherRange
range.intersectWith(otherRange); // => newRange (== new Range(10, 20))

// Metoda cover(otherRange) - zwraca true, jesli przedzial range pokrywa w calosci zadany przedzial otherRange
range.cover(otherRange); // => false
