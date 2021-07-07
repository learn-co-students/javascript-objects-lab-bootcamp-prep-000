function updateObjectWithKeyAndValue(object, key, value) {
  var key = key
  console.log(key)
  var value = value
  console.log (value)
  var obj = Object.assign({}, { prop: 1 }, { [key]: value })
  return obj

}
//updateObjectWithKeyAndValue('prop2', 2)
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
var obj = object
obj.key = 'value'

return obj
}

function deleteFromObjectByKey(object, key) {
var obj
var obj2 = object.key
obj = object[key]
return obj
}

const obj = { prop: 1 }
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
var obj
obj = delete object[key]
return obj
}
