// var arrOfarr = [[1, 2, 3, 5, 4, 3, 2, 4, 2, 1], [1, 2, 3, 2, 4, 3, 4, 4, 1, 5], [4, 2, 3, 1, 4, 2, 5, 4, 2, 4], [5, 2, 3, 2, 4, 3, 1, 5, 3, 1]];
// var array1 = [1, 2, 3, 5, 4, 3, 2, 4, 2, 3];
// var array2 = [];


// function qush(array1, arrOfarr) {
//     var allSums = [];
//     for (var i = 0; i < arrOfarr.length; i++) {
//         var eachArr = arrOfarr[i];
//         allSums.push(compare(array1, eachArr));
//     }
//     return allSums;
// }
// console.log("Qush",qush(array1, arrOfarr));

// for(var i = 0; i < arrOfarr.length; i++) {
//     array2.push(arrOfarr[i]);


// }
// console.log(">>>>>>>>>>>>>>",array2)

// function compare(array1, array2) {
//     console.log('checking  New array =>', array1);
//     console.log('checking  Pr arrays =>', array2);
//     var sum = 0;
//     for (var i = 0; i < array1.length; i++) {
//         var num1 = array1[i];
//         var num2 = array2[i];
//         if (num1 !== num2) {
//             sum += Math.abs(num1 - num2);
//         }
//     }
//     return sum;
// }
// call function
// compare(array1, array2);

function smallest(arrNum) {
    var number = null;
    for (var i = 0; i < arrNum.length; i++) {
        var absVal = arrNum[i];
        // console.log(absVal)
        if (absVal === number || absVal < number) {
            number = absVal;

        }
    }
    return number;
}
console.log(number);
smallest([2, 8, 12, 12]);
