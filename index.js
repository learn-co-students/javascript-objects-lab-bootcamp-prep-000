var recipes = new Object({ key: 'value' })

function updateObjectWithKeyAndValue(object, key, value) {
Object.assign({}, { key: 'value' },  { key: 'value' })
return recipes
}


function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1 }
  return Object.assign({},obj,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value
   return object
}

function deleteFromObjectByKey(object, key) {
var object = {key: 'value'}
var newObject = Object.assign({}, object)
delete newObject.key
return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
