// // Problem-01: 


// function fixWeightMachine(number) {
//   if (!Array.isArray(number)) {
//     return "Invalid Input";
//   }

//   var fixWeights = [];

//   for (var i = 0; i < number.length; i++) {
//     var weight = number[i];

//     if (weight > 0 && typeof weight === "number") {
//       fixWeights.push(weight);
//     }
//   }

//   return fixWeights;
// }




// // Problem-02:


// function countVowels(count) {
//     if (typeof count !== 'string') {
//         return "Invalid Input";
//     }

//     let vowelCount = 0;
//     var vowels = "aeiouAEIOU";

//     for (let i = 0; i < count.length; i++) {
//         let check = count[i];

//         if (vowels.includes(check)) {
//             vowelCount++;
//         }
//     }

//     return vowelCount;
// }








// // Problem-03:


// function evaluateResult(marks) {
//   if (!Array.isArray(marks) && typeof mark !== 'number' ) {
//     return "Invalid Input";
//   }

//   var grades = [];

//   for (var i = 0; i < marks.length; i++) {
//     var mark = marks[i];

//     if (mark < 50) {
//       grades.push("F");
//     }
//     else if (mark >= 50 && mark <= 59) {
//       grades.push("D");
//     }
//     else if (mark >= 60 && mark <= 69) {
//       grades.push("C");
//     }
//     else if (mark >= 70 && mark <= 79) {
//       grades.push("B");
//     }
//     else if (mark >= 80 && mark <= 89) {
//       grades.push("A");
//     }
//     else if (mark >= 90) {
//       grades.push("A+");
//     }
//     else {
//       grades.push("invalid");
//     }
//   }

//   return grades;
// }

// console.log(evaluateResult([0, -56, 'right', 67]));





// // Problem-04:


// function createPerfectPassword(user) {
//   if (typeof user !== 'object') {
//     return "Invalid Input";
//   }

//   if (user.year.toString().length !== 4) {
//     return "Invalid Input";
//   }

//   let password = user.name[0].toUpperCase().concat(user.name.slice(1)).concat(user.year);
//   return password;
// }

 




// // Problem-05:


// function calculateMonthlyExpenses(earnings, expenses) {
//   if (!Array.isArray(earnings) || typeof expenses !== 'number') {
//     return "Invalid Input";
//   }

//   let total = 0;
//   for (let i = 0; i < earnings.length; i++) {
//     total = total + earnings[i];
//   }

//   let savings = total - expenses;
//   if (savings <= 0) {
//     return "Save more money";
//   }

//   return savings;
// }


