//using .replace() - it replaces the first occurence of the mentioned character with the given char
//it is case sensitive and only replace first occurence
function replaceChar1(str) {
    let ans = str.replace("a", "i");
    console.log(ans);
}

//method 2 -RegX
//this will allow us to replace all the occurences
function replaceChar2(str) {
    let ans = str.replace(/a/g, "i");
    console.log(ans);
}

//using .slice function. This can give you the string within specified index range
function replaceChar3(str) {
    let ans = str.slice(0, 3);
    console.log(ans);
}


replaceChar1("Kaka");
replaceChar2("Kaka");
replaceChar3("Kaka");