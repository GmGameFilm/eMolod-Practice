Array.prototype.myForEach = function (item, callback) {
    for(i = item; i<this.length; i++){
    	callback();
    }
};

Array.prototype.myMap = function(callback) {
	let tempArr = this;
	let newArr;
	for (i = item; i<this.length; i++) {
		tempArr[i] = callback(); 
		newArr.push(tempArr[i]);
	}
	return newArr;
};

Array.prototype.mySort = function(callback){
	if(callback === undefined){
		for(i = 0; i < this.length, i++){
			if(this[i].toString()>this[i+]) {
				let temp = this[i];
				this[i] = this[i+1];
				this[i+1] = temp;
			}
		}
	} else {
		callback();
	}
} 