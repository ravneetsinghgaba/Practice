//extract the numbers if exist in a given string

function giveNum(str) {
    console.log(str);

    let ans = str.match(/\d+/g);
    for(let i=0 ; i<ans.length ; i++){
        console.log(ans[i] + " ");
    }
}

giveNum("foo35bar5jhkj88");