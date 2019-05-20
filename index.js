var recipes = new Object({});

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key]= value;
  return obj;
}

function deleteFromObjectByKey(obj,key){
  delete obj.key;
  return obj;
}

function destructivelyDeleteFromObjectByKey(obj, key){
  var newObj = Object.assign({}, obj);
  delete newObj.key;
  return obj;
}
