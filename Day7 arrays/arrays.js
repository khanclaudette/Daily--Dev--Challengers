let stingValue = "Good Morning Developers";
let newArray = [];
let newValue = 0;
newArray[newValue] = '';

for(let i = 0; i < stingValue.length; i++){
    if(stingValue [i] != ' '){
        newArray[newValue] += stingValue[i];
    }else{
        newValue++;
        i++;
        newArray[newValue] = ' ' + stingValue[i]
    }
}

console.log(newArray);