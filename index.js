var recipes = {};

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(object,key,value){
  var newOb = Object.assign({},object,{ [key] :value});
  return newOb;
}

function deleteFromObjectByKey(object,key){
  var newOb = Object.assign({},object);
  delete newOb[key];
  return newOb;
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object;
}
