var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value){
    return Object.assign({}, object, {[key]: value});
}

function deleteFromObjectByKey(object, key){
    var temp = Object.assign({}, object);
    delete temp[key];
    return temp;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
