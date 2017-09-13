var recipes = new Object();

function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({},object,{[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object,key){
  var clone = object;
  return delete clone.key;
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object;
}
