var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){

 object[key]=value;
return object;
}
function deleteFromObjectByKey(object, key){
 object[key]
  newObject=object.delete[key]
  return Object.assign({},newObject)
}
