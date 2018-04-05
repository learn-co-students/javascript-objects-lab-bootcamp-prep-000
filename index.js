var recipes = { eggs: "3" }


function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value});
}
const obj = {milk:"2 liters"}
updateObjectWithKeyAndValue(obj, 'chocolate', '1 cup')


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
} 
const joy = {milk:"2 liters"}
destructivelyUpdateObjectWithKeyAndValue(joy, 'water', '3 liters')



function deleteFromObjectByKey(object, key) {
  var objs = { foo: 'bar'}
  var newObjs = Object.assign({}, objs);
  delete newObjs.foo;
  return objs
}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
