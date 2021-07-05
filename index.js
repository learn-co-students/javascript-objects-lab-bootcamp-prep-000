var recipes = new Object ({});

var obj = {prop: 1}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, obj, { [key]: value});
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key){
  return delete object.key
}

function destructivelyDeleteFromObjectByKey(object, key){
  return delete object[key]
}
