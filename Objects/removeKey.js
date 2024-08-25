let details1 = {
    name: 'Bunty',
    age: 22,
    country: 'India'
};

let details2 = {
    name: 'Bunty',
    age: 22,
    country: 'India'
}

console.log('\nOriginal object', details1);

//using reduce() and filter() method
details1 = Object.keys(details1).filter(ObjKey =>
    ObjKey !== 'age').reduce((newObj, key) => {
        newObj[key] = details1[key];
        return newObj;
    }, {}
  );
 
console.log(details1);  

//using delete operator
delete details2.country;
console.log(details2);  


let details3 = {
    name: 'Bunty',
    age: 22,
    country: 'India'
}

//destructuring with rest operator
const {name, ...rest} = details3;
console.log(rest);