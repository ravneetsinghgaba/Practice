let regex = /^[a-zA-Z]+$/;

let str1 = 'acbd';
let str2 = 'abcd2';

console.log(regex.test(str1));
console.log(regex.test(str2));


function isAlpha(str) {
    return [...str].every(char => isNaN(char));
}

console.log(isAlpha(str1));
console.log(isAlpha(str2));