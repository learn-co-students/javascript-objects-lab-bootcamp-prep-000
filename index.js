var recipes = {};

function updateObjectWithKeyAndValue(obj, key, val){
	var result = Object.assign({}, obj, {[key]: val})
	return result
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val){
	obj[key] = val
	return obj
}

function deleteFromObjectByKey(object, key){
	var clone = Object.assign({}, object)
	delete clone[key];
	return clone;
}

function destructivelyDeleteFromObjectByKey(object, key){
	delete object[key];
	return object
}
