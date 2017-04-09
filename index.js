var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  console.log(object);
  var newObj = Object.assign({},object);
  console.log(newObj);
  delete newObj[key];
  console.log(key);
  console.log(newObj);
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object;
}