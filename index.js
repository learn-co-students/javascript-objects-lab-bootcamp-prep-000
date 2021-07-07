var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  return recipes ;
}
function updateObjectWithKeyAndValue(object, key, value) {
  var recipes = { prop:"1" , prop2:"2"} ;
  return recipes ;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object.prop = "1";
object.prop2 = '2';
  return object;
}
function deleteFromObjectByKey(object, key) { 
  return object ;
} 
function deleteFromObjectByKey(object, key) { 
return Object.assign;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.prop;
  return object;
}
