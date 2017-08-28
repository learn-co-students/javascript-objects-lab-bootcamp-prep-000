var recipes = new Object();

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key]=value;
  return obj
}

function updateObjectWithKeyAndValue(obj, key, value){
  var newObj = Object.assign({}, obj);
  newObj[key]=value;
  return newObj;
}

function deleteFromObjectByKey(object,key){
  var newObj = Object.assign({}, object);
   delete newObj[key];
   return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  return delete object[key];
}
