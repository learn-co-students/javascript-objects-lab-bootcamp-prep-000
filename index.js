var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
var obj0 = object;
obj0[key] = value;
return object, obj0;
//object[key] = value;
//  return obj0, object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
object[key] = value;
  return object; }

function deleteFromObjectByKey(object, key){
   var obj0 = object;
   delete obj0.key;
   return obj0;
  }

  function destructivelyDeleteFromObjectByKey(object, key){
  // delete object.key;
  delete object['key'];
   return object;
}
