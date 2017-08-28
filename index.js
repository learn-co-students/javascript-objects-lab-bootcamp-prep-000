var recipes = new Object();

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key]=value;
  return obj
}

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]:value})

}

function deleteFromObjectByKey(object,key){
  var newObj = Object.assign({}, object);
   delete newObj[key];
   return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  return delete object[key];
}
