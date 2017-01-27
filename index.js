var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
Object.assign({}, object, {[key]: value});
object[key] = value;
return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
object[key] = value;
return object
}

function deleteFromObjectByKey(object, key){
Object.assign({}, object);
delete {}[key];
return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object
}
