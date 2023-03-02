// exercise-1
// prefix (++a) & postfix (a++)    

// let a = 1 
// b = 1
// c = a++         // c = a++ = a = 1; answer 1 because in top a = 1.
// d = ++a         // d = d++ = ++a = a++ = a =1; answer 4 because d get value 4 from last postfix.
// e = ++b         // e = ++b = b = 1; answer 2 just b get second value from prefix
// f = d++;        // f = d++ = ++a = a++ = a = 1; answer will be 3 in console and 4 its value.

// console.log(a); // 3 -> a get 2 values and last value given by prefix
// console.log(b); // 2 -> b get 1 value and last given by prefix
// console.log(c); // 1 -> c get value of a = 1 and it 1
// console.log(d); // 4 -> d get 3 values from a and in last get value by postfix
// console.log(e); // 2 -> e get value from prefix ++b 
// console.log(f); // 3 -> f get value of d by postfix 

//----------------------------------------------------------------------
// exercise-2
// assignment operators

// let a = 2
//     b = 3
//     c = 4 
//     d = 5
//     e = 6 
//     f = 7;  
// let x = 1 + (a *= 2);                  console.log(x); -> 5 
// let z = 4 - e * a + 5 - (c / 12) + 5;  console.log(z); -> -10;

//-------------------------------------------------------------------------
//exercise-3
//type conversion

// console.log (("" + 1 + 0 ));    // string "10"
// console.log (("" - 1 + 0));     // number -1
// console.log ((true + false));   // number 1
// console.log ((6 / "3"));        // number 2
// console.log (("2" * "3"));      // number 6
// console.log ((4 + 5 + "px"));   // string "9px"
// console.log (("$" + 4 + 5));    // string "$45"
// console.log (("4" - 2 ));       // number 2
// console.log (("4px" - 2 ));     // NaN
// console.log ((" -9 " + 5));     // string " -9 5"
// console.log ((" -9 " - 5));     // number -14  
// console.log ((null + 1));       // number 1   
// console.log ((undefined + 1));  // NaN         
// console.log ((" \t \n" - 2));   // number -2

//-------------------------------------------------------------------------
//exercise-4
//comparisons

// 5 > 4  //true
// "apple" > "pineapple" //false because ascii table
// "2" > "12"            //true because ascii table letter "2" > "1"
// undefined == null     //true becuase undefine and null are non value
// undefined === null    //false because they have different data type (=== compares for data type)
// null == "\n0\n"       //false because "string"
// null === +"\n0\n"     //false because different data type

//------------------------------------------------------------------------
//exercise-5
//if, else
//turnary operator

//  if ("0") {
//     alert("Hello");
// } // this will alert in browser becuse "0" is true, it's "string"


//if else -> turnary operator
// let answer = prompt(`Do you know "official" name of Javascript?`);

// Using if else:
// if (answer == "ECMAscript") { alert`Right!` }
// else { alert(`You don't know Javascript?`) }


// Using turnary operator:
// answer == "ECMAscript" ? alert(`Right!`) : alert(`You don't know Javascript?`)

//------------------------------------------------------------------------
// Determine the numbers of equality to zero with "if else" and turnary operator:

// let inputNumber = prompt(`Input random number`)

// Turnary operator way:

// inputNumber > 0 ? alert(`Greater than zero`) 
//  : inputNumber == 0 ? alert(`Equal to zero`) 
//  : inputNumber <= -1 ? alert(`Less than zero`) 
//  : alert(`Not a number`);

// if else way:

// if (inputNumber > 0) {
//     alert(`Greater than zero`)
// }
// else if (inputNumber == 0) {
//     alert(`Equal to zero`)
// }
// else if (inputNumber <= -1) {
//     alert(`Less than zero`)
// }
// else {
//     alert(`Not a number`)
// };

//-------------------------------------------------------------------------------
// From "if else" to "turnary"


// "if else"
// let result;
// if (a + b < 4) {
//     result = "Below"; 
// } else {
//     result = "Over";
// }
// "turnery operator"
// let result;
// a + b < 4 ? result = `Below` : result = `Over`;


//"if else"

// let login = prompt("Login");

// if (login == "Employee") {
//     alert("Hello")
// } else if (login == "Director") {
//     alert("Greetings")
// } else {
//     alert("No login")
// }


//"turnery operator"
// let 
// login == `Employee` ? message = `Hello` 
//     : login == `Director` ? message = `Greetings` 
//     : login == '' ? message = `No login` 
//     : message = '';

//----------------------------------------------------------------------------
//exercise-6
//switch | for loop


//multiplication table
// for (i = 1; i < 10; i++) {
//     console.log(`${i}lik karra jadvali`);
//     for (j = 1; j < 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }


//from for loop to while loop
// for (let i = 0; i < 3; i++) {
//     alert(`number ${i}!`);
// }

// let i = 0;
// while (i < 3) { alert(`number ${i}!`); i++ };

// let age = prompt(`Your age?`)

// function checkAge(age) {
//     if ( age > 18) {
//         return true;
//     } else {
//         return confirm("Did parents allow you?")
//     }
// }



// let acc = {
//     major: "data",
//     variable: "123",
//     // variable: "321"
// };

// let variable = "major";

// // console.log(acc.variable); // "123"
// // console.log(acc[variable]); // "data"
// // console.log(acc["key"]); // "123" 
// console.log(variable in acc); // "123" 


//----------------------------object-exercises------------------------------
// let user = {name: "John", surname: "Smith",}; user.name = "Pete"; delete user.name; console.log(user);

// let obj = {
// name: "Olim"
// };

// function isEmpty() {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// console.log(isEmpty(obj));


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// }


// console.log(Object.values(salaries));
//------------------------------------------------
//the summ of salaies
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key]
// }
// console.log(sum);



// let entries = Object.entries(salaries);
// // [["you",100],["me",75],["foo",116],["bar",15]]

// let sorted = entries.sort((a, b) => a[1] - b[1]);
// // [["bar",15],["me",75],["you",100],["foo",116]]

// console.log(sorted)
// let ordered = [];

// function order(){
//     for (i in salaries) 
// }

// console.log(order(salaries));






// let fruit = prompt("Какой фрукт купить?", "apple");

// let bag = {
//   [fruit]: 5, // имя свойства будет взято из переменной fruit
// };

// alert( bag.apple );