const arrayOfNumbers = [1,2,3,4,5];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
});

console.log(sum);

const sum2 = arrayOfNumbers.reduce((hee,currentValue) => {
    return hee + currentValue
});

console.log(sum2);