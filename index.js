var recipes = {

};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj, key){

  var newObj = Object.assign({}, obj,);
  delete obj.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}
