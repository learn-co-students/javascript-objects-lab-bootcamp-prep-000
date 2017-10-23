var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var duplicate = Object.assign({}, object)
  duplicate[key] = value;
  return duplicate;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var duplicate = Object.assign({}, object);
  delete duplicate[key];
  return duplicate;

}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
