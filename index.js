var recipes = { breakfast: 'cereal'}

function updateObjectWithKeyAndValue(object, key, value) {
var hello = Object.assign({}, object, { [key]: value })
  return hello;
}


//function updateObjectWithKeyAndValue(object, key, value) {
//  return object['key'] = 'value'
//}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key] = value
 return object
}

function deleteFromObjectByKey(object, key) {
  return delete object[key]
}

function deleteFromObjectByKey(object, key) {
var newObj = Object.assign({}, object)
  return delete newObj.key
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key]
}
