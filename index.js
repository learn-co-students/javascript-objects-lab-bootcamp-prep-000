var recipes = {"hot cocoa": "chocolate"};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object);
  return Object.assign(newObj, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, { [key]: value })
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object);
  delete newObj.key
  return newObj

}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key
  return object
}
