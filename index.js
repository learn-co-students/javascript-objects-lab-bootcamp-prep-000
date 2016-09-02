var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
  var addition = {}
  addition[key] = value
  var temp = Object.assign(obj, addition);
  return temp
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
	var temp = Object.assign({}, object)
	delete temp[key]
	return temp

}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
