var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]:value});
}

function deleteFromObjectByKey(object, key){
  var obj = Object.assign({}, object);
  delete obj[key];
  return obj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  return delete object[key];
}

