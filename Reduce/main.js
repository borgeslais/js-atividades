// .reduce() = reduce the elements of an array to a single value

const prices = [3, 4, 5, 5, 7, 20, 30];
const total = prices.reduce(sum);

function sum(previous, next){
    return previous + next;
}

// Another example

const grades = [75, 50, 90, 85, 70];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}