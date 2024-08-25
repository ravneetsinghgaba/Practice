function iterateObject() {
    let exampleObj = {
        book: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        genre: "Mystery"
    };

    console.log('\nfor..in loop\n')
    for(let key in exampleObj) {
        if(exampleObj.hasOwnProperty(key)) {
            value = exampleObj[key];
            console.log(key, value);
        }
    }

    console.log('\nObject.entries and map\n')
    Object.entries(exampleObj).map(entry => {
        let key= entry[0];
        let value= entry[1];
        console.log(key, value);
    })

    console.log('\nforEach and object.keys\n')
    Object.keys(exampleObj).forEach(key => {
        const value= exampleObj[key];
        console.log(key, value);
    })

}
iterateObject();    