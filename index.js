var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]: value});
}

function deleteFromObjectByKey(object, key) {
  return delete Object.assign({}, object)[key];
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete Object.assign(object)[key];
}

