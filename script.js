var array = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0], posMax = 0, genElemLeft=0, genElemRight=0, water=0;
for(var pos = 0; pos<array.length; pos++) 
	if (array[pos]>=array[posMax])	posMax = pos;
console.log(posMax);
var arrayLeft = array.slice(0, posMax), arrayRight = array.slice(posMax+1).reverse();
if (arrayLeft.length>1) 
for (var i = 0; i<arrayLeft.length; i++) {
	if(arrayLeft[genElemLeft]<=arrayLeft[i+1]) genElemLeft = i+1; else if (arrayLeft[genElemLeft]>arrayLeft[i+1]) water+=arrayLeft[genElemLeft] - arrayLeft[i+1];
}
if (arrayRight.length>1)
for (var i = 0; i<arrayRight.length; i++) {
	if(arrayRight[genElemRight]<=arrayRight[i+1]) genElemRight = i+1; else if (arrayRight[genElemRight]>arrayRight[i+1]) water+=arrayRight[genElemRight] - arrayRight[i+1];
}
console.log(water);