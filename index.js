//var recipes = {}
var recipes = new Object()
var obj = { prop: 1 }

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value})
}

updateObjectWithKeyAndValue(obj, 'prop2', 2)  

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]:value})
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}