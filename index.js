var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
    var resultObj = Object.assign({}, object);
    resultObj[key] = value;
    return resultObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var resultObj = Object.assign({}, object);
  delete resultObj[key];
  return resultObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
