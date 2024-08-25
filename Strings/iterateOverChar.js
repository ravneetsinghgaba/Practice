const str = 'Party';

console.log('From For loop');
for(let i=0 ; i<str.length ; i++){
    console.log(str[i]);
}

console.log('From For...of loop');
for(const char of str) {
    console.log(char);
}