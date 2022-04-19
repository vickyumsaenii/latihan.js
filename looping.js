Looping;

for (var i = 1; i <= 10; i += 1) {
  console.log(i);
}

/**
 * STUDY CASE 1
 *
 * var str = "bukber"
 *
 * Result:
 * BuKbEr
 */
var str = 'bukber';
var temp = '';

for (var i = 0; i < str.length; i++) {
  if (i % 2 === 0) {
    console.log(str[i].toUpperCase());
    temp += str[i].toUpperCase();
  } else {
    temp += str[i];
    console.log(str[i]);
  }
}
console.log(temp);

/**
 * STUDY CASE 2
 *
 * var = "abaabbabab";
 *
 * Result:
 * Jumlah a = 5
 * Jumlah b = 5
 */

// var kode = 'abaabbabab';
// var countA = 0;
// var countB = 0;

// for (var i = 0; i < kode.length; i++) {
//   if (kode[i] === 'a') {
//     countA++;
//   } else if (kode[i] === 'b') {
//     countB++;
//   }
// }
// console.log("Jumlah a = " + countA);
// console.log("Jumlah b = " + countB);

/**
 * STUDY CASE 3
 *
 * var kalimat = "saya mau buka bersama teman"
 *
 * Result:
 * saya
 * mau
 * buka
 * bersama
 * teman
 */

// var kalimat = "saya mau buka bersama teman"
// var temp = "";

// for (var i = 0; i < kalimat.length; i++) {
//     if (kalimat[i] !== " ") {
//         temp += kalimat[i];
//     } else {
//         console.log(temp)
//         temp = ""
//     }
//     if (i === kalimat.length - 1) {
//         console.log(temp)
//         temp = ""
//     }
// }

/**
 * STUDY CASE 4
 *
 * var input = 3;
 *
 * Result:
 * ###
 * ###
 * ###
 */

// var input = 3;
// var temp = "";

// for (var i = 1; i <= input; i++) {
//     for (var j = 1 + (input * (i - 1)); j <= input * i; j++) {
//         temp = temp + String(j)
//     }
//     console.log(temp)
//     temp = ""
// }

/**
 * STUDY CASE 5
 *
 * var input = 5
 *
 * REsult:
 * 1
 * 12
 * 123
 * 1234
 * 12345
 */

// var input = 5;
// var temp = '';

// for (var i = 0; i < input; i++) {
//   for (var j = 0; j < i + 1; j++) {
//     temp += String(j + 1);
//   }
//   console.log(temp);
//   temp = '';
// }
