var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
   return Object.assign({}, object, { [key]: value })
 }

var object = { 'prop' : "1"}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object['prop2'] = '2'
  return object
}

function deleteFromObjectByKey(obj, key) {
var obj = { prop: '1' }
delete obj.prop;
return obj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var object = {prop: '1'}
  delete object.prop
  return object
}
