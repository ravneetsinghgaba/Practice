//Delete certain object from array of objects

let arr = [{
    a: 'Val_1',
    b: 'Val_2'
}, {
    a: 'Val_3',
    b: 'Val_4'
}, {
    a: 'Val_1',
    b: 'Val_2'
}];

function removeObj() {
    arr.forEach(function (obj) {
        delete obj.a;
    })

    console.log(arr);
}


let arr2 = [{
    a: 'Val_1',
    b: 'Val_2'
}, {
    a: 'Val_3',
    b: 'Val_4'
}, {
    a: 'Val_1',
    b: 'Val_2'
}];

function removeObj2() {
    arr2.filter(obj => {
        for(let key in obj) {
            if (key === 'b') {
                delete obj[key];
            }
        }
    })

    console.log(arr2);
}

removeObj();
removeObj2();