var recipes= {

}

function updateObjectWithKeyAndValue(object,key,value) {
 var newObj = Object.assign({},object,{[key]: value});
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = '2';
  return object;
  }

function deleteFromObjectByKey(object, key) {
  var newObject= Object.assign({},object);
  delete newObject.prop;
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
var newObj = delete object[key]
return newObj;
}
