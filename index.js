var recipes = {}

//this one has a problem
//updateObjectWithKeyAndValue(obj, 'prop2', 2)
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({prop: 1}, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

//this one has a problem
function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
