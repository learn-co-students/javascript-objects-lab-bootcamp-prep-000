var recipes= {}
function updateObjectWithKeyAndValue(object, key, value){
  object[key]= value;
    return object;
}
  function updateObjectWithKeyAndValue(object, key, value){
   return Object.assign({}, object, { prop2: value });
  }
  function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]= value;
    return object;
}
 function deleteFromObjectByKey(object, key){
    return delete object.key;
 }
 function destructivelyDeleteFromObjectByKey(object, key){
       delete object[key];
       return object;
 }