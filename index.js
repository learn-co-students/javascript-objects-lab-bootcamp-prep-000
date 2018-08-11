var recipes = {
}

function updateObjectWithKeyAndValue(obj,key,val){
var obj1 = Object.assign({},obj);
obj1[key] = val;
return obj1;
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,val){
  obj[key] = val;
  return obj;
}

function deleteFromObjectByKey(obj,key){
  var obj1 = Object.assign({}, obj);
  delete obj1[key];
  return obj1;
}

function destructivelyDeleteFromObjectByKey(obj,key){
  delete obj[key];
  return obj;
}