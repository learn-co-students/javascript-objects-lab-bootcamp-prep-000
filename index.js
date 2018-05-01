var recipes = {
  tacos: "steak", pizza: "mozarella", curry: "chicken"
}

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) { 
  object[key]=value; return object
}

function deleteFromObjectByKey(object, key) {
  var object = {};
  var newObj = Object.assign({}, object)
  delete newObj.key
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]; return object
}
