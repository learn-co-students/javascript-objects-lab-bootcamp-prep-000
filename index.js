let recipes = {};

function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign( {[key] :value},object );
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object,key){
  let clone = Object.assign({},object);
  delete clone[key];
  return clone;
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object;
}
