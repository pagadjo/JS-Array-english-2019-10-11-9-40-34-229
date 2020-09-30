// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
document.write(typeof a);
document.write(" | ");
document.write(typeof b);
document.write("<br>");

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var x = 0; x < a.length; x++){
     a[x] = a[x] * 2;
}
document.write(a);
document.write("<br>");

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'

var colors1 = colors.join(" ");
document.write(colors1);
document.write(" | ");
var colors2 = colors.join("+");
document.write(colors2);
document.write(" | ");
var colors3 = colors.join(",");
document.write(colors3);
document.write("<br>");

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(
  function(param1, param2){
    return param2-param1;
  }); 
document.write(a);
document.write("<br>");


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
console.log(a);
var prev;
var freq = [];
var aCopy = [];
a.sort();
  for(var x=0; x < a.length; x++){
    if(a[x] == prev){
      freq[freq.length-1]++;
    }else{
      aCopy.push(a[x]);
      freq.push(1);
    }
    prev = a[x];
  }
console.log("Distinct " + aCopy);
console.log("Freq " + freq);
let maxIndex = freq.indexOf(Math.max(...freq));
console.log(maxIndex);
console.log(aCopy[maxIndex]);
document.write(aCopy[maxIndex]);