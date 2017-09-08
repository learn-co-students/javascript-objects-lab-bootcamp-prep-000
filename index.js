var recipes = {};

function updateObjectWithKeyAndValue(obj, k, v){
  return Object.assign({[k]:v}, obj);
}


function destructivelyUpdateObjectWithKeyAndValue(obj,k,v){
  obj[k] = v;
  return obj;
}


function deleteFromObjectByKey(obj, k){
  var temp = Object.assign({}, obj);
  delete temp[k];
  return temp;
}

function destructivelyDeleteFromObjectByKey(obj,k){
  delete obj[k];
  return obj;
}
