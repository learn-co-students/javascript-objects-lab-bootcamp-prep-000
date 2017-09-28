var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  //use Object.assign({},object,{key:value})
  var obj1 = Object.assign({},object);
  obj1[key] = value;
  return obj1;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;

}

function deleteFromObjectByKey(object, key){
  //use Object.assign({},object)
  var obj1 = Object.assign({},object);
  delete obj1.key;
  return obj1;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
