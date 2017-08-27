var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
	 return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
	object[key] = value;
	return object
}

function deleteFromObjectByKey(object, key){
	var hash = Object.assign({}, object);
	delete hash[key];
	return hash;
}

function destructivelyDeleteFromObjectByKey(object, key){
	delete object[key];
	return object;
}