'use strict';

/*
1. Panaudoti Javascript "use-strict" režimą.
2. Apsirašyti 4 kintamuosius: skaicius1, skaicius2, skaicius3, skaicius4.
3. Į konsolę išvesti visus 4 skaičius, jų visų sumą ir sandaugą.
3. Sukeisti skaicius1 ir skaicius2 reikšmes vietomis, pasinaudojant laikinuoju kintamuoju.
4. Sukeisti skaicius3 ir skaicius4 reikšmes vietomis be laikinojo kintamojo.
5. Į alert išvesti sukeitimo rezultatus.
6. Susikurti kintamąjį maxSkaicius, jam priskirti maksimalią įmanomą skaitinę reikšmę (infinity netinka) ir išvesti į konsolę.
Papildoma:
1. Susikurti kintamuosius: skaicius5, skaicius6.
2. Sukeisti kinamųju reikšmes skaicius5 ir skaicius6 pasitelkiant XOR operatorių.
3. Rezultatą patalpinti į HTML dokumento div žymėje, kurios id="Rezultatas".
*/

//2

var skaicius1 = 1;
var skaicius2 = 2;
var skaicius3 = 3;
var skaicius4 = 4;

//papildoma 1

var skaicius5 = 5;
var skaicius6 = 6;

//3

var suma = skaicius1 + skaicius2 + skaicius3 + skaicius4;
var sandauga = skaicius1 * skaicius2 * skaicius3 * skaicius4;

console.log(skaicius1);
console.log(skaicius2);
console.log(skaicius3);
console.log(skaicius4);
console.log(suma);
console.log(sandauga);

//4

var temp;
temp = skaicius1;
skaicius1 = skaicius2;
skaicius2 = temp;

//5
[skaicius3, skaicius4] = [skaicius4, skaicius3];

//6

alert("skaicius1: " + skaicius1 + "\n" + "skaicius2: " + skaicius2 + "\n" 
+ "skaicius3: " + skaicius3 + "\n" + "skaicius4: " + skaicius4);

//7

var maxSkaicius = Number.MAX_VALUE;
console.log(maxSkaicius);

//papildoma 2 

skaicius5 = skaicius5 ^ skaicius6;
skaicius6 = skaicius5 ^ skaicius6;
skaicius5 = skaicius5 ^ skaicius6;

// papildoma 3

document.getElementById('Rezultatas').innerHTML += 
"skaicius5: " + skaicius5 + "<br>" + "skaicius6: " + skaicius6;