var recipes = {
  prop: '1'
};

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, recipes, {[key]: value});
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, object, {[key]:value});
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, recipes);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
