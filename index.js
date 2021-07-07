var recipes = {}

var obj = { prop: 1 }
key  = 'prop2'
value = 2
function updateObjectWithKeyAndValue(obj, key, value) {
   return Object.assign({}, obj, { [key]: value })

}


var obj = { prop: 1 }
var key = 'prop2'
var value = 2
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

var obj = { prop: 1 }
var value = prop
function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
}


var obj = { prop: 1 }
var value = prop
function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]

  return obj
}
