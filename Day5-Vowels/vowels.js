
var vowels = "aeiou";
var label = "claudettei";

var vowelCount = "";
for (i = 0; i < label.length; i++) {
  if(vowels.indexOf(label[i]) >= 0) vowelCount += label[i];
}
console.log(vowelCount);; 