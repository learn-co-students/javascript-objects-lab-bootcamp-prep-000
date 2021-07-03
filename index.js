var recipes = {
  
}

function updateObjectWithKeyAndValue(obj, key, value ){
  var newVal = {[key] : value};
  
  return Object.assign({} , obj , newVal);
}

function destructivelyUpdateObjectWithKeyAndValue(obj , key, value){
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj , key){
  var newVal = Object.assign({}, obj);
  delete newVal[key];
  return newVal;
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj;
}