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


 
class vehicle {
    color;
    model;
    fuel;
    weight;
    name;
    size;
    pdtDate;
    speed;
 
    constructor(){
        this.startCar();
    }
    destructor() {
        this.stopCar()
    }

    startCar() {
        console.log('the car has started');
        sessionStorage.setItem('start', startCar);
    }
    stopCar(){
        console.log('the car has stoped');
        sessionStorage.setItem('stop', this.stopCar)
    }
}

var vowels = "aeiou";
var label = "banana";

var stripped = "";
for (i = 0; i < label.length; i++) {
  if(vowels.indexOf(label[i]) >= 0) stripped += label[i];
}
console.log(stripped);