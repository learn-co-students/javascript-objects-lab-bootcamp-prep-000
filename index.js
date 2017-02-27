var recipes = {
	milk: '1 cup',
	sugar: '1/2 cup'}

	function updateObjectWithKeyAndValue(obj, key, value) {
	  return Object.assign({}, obj, { [key]: value })
	}

	function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
		object[key] = value
		return object
	}

	function deleteFromObjectByKey(object, key) {
		delete object.key
		return object
	}

	function destructivelyDeleteFromObjectByKey(object, key) {
	delete object.key
	return object
}
