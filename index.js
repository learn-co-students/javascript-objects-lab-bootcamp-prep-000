var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
  
  return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;
  
  return obj;
}

function deleteFromObjectByKey(obj, key){
  var anobj = Object.assign({}, obj, key);
  delete anobj.key;
  return anobj[key];
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  console.log(obj);
  return obj;
}

