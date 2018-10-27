var array1 = [5, 3, 6, 4, 8, 2];
function findInArray(array){
	var posMax = array[0], posMin = array[0], sum = 0, extra, obj = {};
	for(var i = 0; i<array.length; i++)	{
		sum += array[i];
		obj[i] = array[i];
		if (array[posMax]<array[i+1]) posMax = i+1;
		if (array[posMin]>array[i+1]) posMin = i+1;
	}
	obj['min'] = array[posMin];
	obj['max'] = array[posMax];
	obj['sum'] = sum;
	extra = obj['min'];
	obj[posMin] = obj['max'];
	obj[posMax] = extra;		
	return obj;
}
console.log(findInArray(array1));

function cb(cbs){
	return function(cbs){
		cbs();
	}
}

var array2 = ['s', 255, 34, 'a', 5];
function arrToObj(array){
	var obj = {};
	for(var a = 0; a<array.length; a++){
		obj[array[a]] = undefined;
	}
	return obj;
}
console.log(arrToObj(array2));