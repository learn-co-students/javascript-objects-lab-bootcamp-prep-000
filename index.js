var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object, key){
  var jj = Object.assign({}, object);
 delete jj[key];
  return jj;
}


function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj;
}

