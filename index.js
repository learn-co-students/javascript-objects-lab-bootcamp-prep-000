var recipes = {scrambled: "egss"};

function updateObjectWithKeyAndValue(object, key, value){
	// var newObj = Object.assign({}, object);
	// newObj[key] = value;
	// return newObj;
	return Object.assign({}, object, { [key]: value })
	
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
	object[key] = value;
	return object;
}

function deleteFromObjectByKey(object, key) {
	var new_object = Object.assign({}, object);
	delete new_object[key];
	return new_object;
}

function destructivelyDeleteFromObjectByKey(object, key){
	return delete object[key];
}

console.log(updateObjectWithKeyAndValue(recipes, "Salsa", "tabasco"));
console.log(deleteFromObjectByKey(recipes, "scrambled"));
console.log(recipes);