// function digPow(n, p){
//     let arr = n.toString(10).split('').map(int => parseInt(int, 10))
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         let ind = arr[i];
//         for (let j = p; j < arr.length; j++) {
//             return sum += ind**j;
//         }
//         let k = sum / n;
//         if (sum % n === 0){
//           return k;
//         } else {
//           return -1;
//         }
//     }
// }
// console.log(digPow(89, 1));

// function digPow(n, p) {
//     let arr = n.toString(10).split('').map(int => parseInt(int, 10));
//     let sum = 0;
//     for( let i = 0; i < arr.length; i++){
//         for(let j = p; j < arr.length + p; j++){
//             sum += arr[i]**j;
//         }
//     }
    
//     let k = sum / n;

//     if (sum % n === 0){
//         return k;
//     } else {
//         return -1;
//     }
// }


function digPow(n, p) {
    let arr = n.toString(10).split('').map(int => parseInt(int, 10));
    let sum = 0;
    for( let i = 0; i < arr.length; i++){
        sum += arr[i]**(p + i);
    }
    
    let k = sum / n;

    if (sum % n === 0){
        return k;
    } else {
        return -1;
    }
}

console.log(digPow(46288, 3));