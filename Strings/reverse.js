//method 1
function reverseString1(str) {
    const ans = str.split("").reduce((acc, char) => char + acc, "");
    console.log(ans);
}

//method 2
function reverseString2(str) {
    const ans = [...str].reverse().join("");
    console.log(ans);
}

//method 3
function reverseString3(str) {
    const stack = [];

    for(let char of str) {
        stack.push(char);
    }

    let ans = '';
    while(stack.length > 0) {
        ans += stack.pop();
    }

    console.log(ans);
}

reverseString1("bunty");
reverseString2("bunty");
reverseString3("bunty");