var array1 = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1],
array2 = [1, 7,3],
array3 = [1,undefined,3,5,-3],
array4 = [1,NaN,3,5,-3];

function min(array) {
var currentElement;
for (var i = 0; i < array.length; i++) {
  if (isFinite(array[i])){
    if(currentElement === undefined) currentElement = array[i];
    if (array[i]<currentElement) currentElement = array[i];
  }
}
return currentElement;
}

function max(array) {
  var currentElement;
  for (var i = 0; i < array.length; i++) {
    if (isFinite(array[i])){
      if(currentElement === undefined) currentElement = array[i];
      if (array[i]>currentElement) currentElement = array[i];
    }
  }
  return currentElement;
}

function sum(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (isFinite(array[i])) {
    }
  }
  return count;
}

console.log(sum(array1)+" sum(array1)");
console.log(sum(array2)+" sum(array2)");
console.log(sum(array3)+" sum(array3)");
console.log(sum(array4)+" sum(array4)");
console.log("");
console.log(min(array1)+" min(array1)");
console.log(min(array2)+" min(array2)");
console.log(min(array3)+" min(array3)");
console.log(min(array4)+" min(array4)");
console.log("");
console.log(max(array1)+" max(array1)");
console.log(max(array2)+" max(array2)");
console.log(max(array3)+" max(array3)");
console.log(max(array4)+" max(array4)");
