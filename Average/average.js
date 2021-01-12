var numbers = [1, 2, 3, 4, 5]; //declare a variable with an array of five numbers
var totalSum = 0;
for(var i in numbers){
    totalSum += numbers [i];
}; //calculates the sum by looping through the above array
console.log('The totalsum of the array is ' + totalSum); 

var numberCount = numbers.length;
console.log('The length of the array is ' + numberCount);

var average = totalSum / numberCount; //the sum of the Array divided by the length gives the average
console.log('The average of 5 numbers is ' + average);