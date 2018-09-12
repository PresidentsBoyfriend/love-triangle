module.exports = function getLoveTrianglesCount(preferences = []) {
	var counter = 0;
		preferences.splice (0,0,0);
		for (var i =  1; i < preferences.length; i++){
			var first = preferences[i];
			var second = preferences[first];
			var third = preferences[second];
			if (third == i){
				counter++;
			}
	}
	return Math.floor(counter/3);
};
