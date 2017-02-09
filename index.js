var recipes = {};
function updateObjectWithKeyAndValue( obj, key, value) {

 return Object.assign({},obj,{prop2: 2});

}
function destructivelyUpdateObjectWithKeyAndValue( obj, key, value) {

 obj[key] = value
 return obj;

}

function deleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}
