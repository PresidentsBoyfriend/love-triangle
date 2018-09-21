module.exports = function getLoveTrianglesCount(preferences = []) {
	var counter = 0, firstIndex, secondIndex, thirdIndex;
		for (var i =  0; i < preferences.length; i++){
			firstIndex = preferences[i];
			secondIndex = preferences[firstIndex-1];
			thirdIndex = preferences[secondIndex-1];
			if (thirdIndex == i+1){
				counter++;
			}
		}
	return Math.floor(counter/3);
};
