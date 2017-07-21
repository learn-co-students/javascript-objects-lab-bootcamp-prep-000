var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, k, v){
  obj[k]=v;
  return obj;
}

function deleteFromObjectByKey(o, k){
  var clone = Object.assign({},o);
  delete clone[k];
  return clone;
}

function destructivelyDeleteFromObjectByKey(o, k){
  delete o[k];
  return o;
}
