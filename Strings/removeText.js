//.replace is case sensitive and only replace first occurence
function removeText1(str) {
    let ans= str.replace('mo', 'mi');
    console.log(ans);
}

//.replace with Regex, it replaces all occurrences
function removeText2(str) {
    let ans = str.replace(/mo/g, 'mi');
    console.log(ans);
}

//.replaceAll replaces all occurences and is case sensitive
function removeText3(str) {
    let ans= str.replaceAll('mo', 'mi');
    console.log(ans);
}

removeText1('momo') //mimo
removeText2('momo') //mimi
removeText3('Momomo') //Momimi