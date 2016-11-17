var recipes = {
  pie: ["crust", "filling"],
  quesadilla: ["tortilla", "cheese"]
};

function updateObjectWithKeyAndValue(object, key, value){
  var clone = Object.assign({}, object);
  clone[key] = value;
  return clone;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObject = object;
  delete newObject.key;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}
