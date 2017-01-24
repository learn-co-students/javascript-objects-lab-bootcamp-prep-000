var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) { // we want to use key and value here
return Object.assign({}, object, {[key]: value}) // lets pass in object here, and create the object with key / value pair to be merged as well
// Object.assign(object we're assigning to, object's we're going to merge with)
}
// var obj = {[key]: value} // you should be create this object after the , to be merged with {} also
// updateObjectWithKeyAndValue({rice: '1 cup'}, "milk", "1/2 cup")eys
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var obj = Object.assign({}, object)
  delete obj[key]
  return obj;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object;
}
