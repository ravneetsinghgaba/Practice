function getObjectLength() {
    exampleObj = {
        id: 1,
        name: 'Bunty',
        age: 22
    }

    const objLength1 = Object.keys(exampleObj).length;
    console.log(objLength1);

    const objLength2 = Object.entries(exampleObj).length;
    console.log(objLength2);

}

getObjectLength();