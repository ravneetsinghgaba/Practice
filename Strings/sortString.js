//.split converts string into array
let ans = (str) => {
    return str.split('').sort().join('');
}

console.log(ans('dcba'));