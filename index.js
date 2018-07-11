var recipes = { milk: "2 cup" }

function updateObjectWithKeyAndValue(object, key, value) {
	var object1 = {}
	object1[key] = value;
	return Object.assign({}, object, object1)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
	object[key] = value;
	return object
}

function deleteFromObjectByKey(object, key) {
	var newObject = Object.assign({}, object)
	delete newObject[key]
	return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
	delete object[key]
	return object
}