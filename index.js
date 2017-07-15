var recipes = {
  dessert: 'tiramisu'
};

function updateObjectWithKeyAndValue(object,key,value) {
  var ans = Object.assign({},object);
  ans[key] = value;
  return ans;
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var ans = Object.assign({},object);
  delete ans[key];
  return ans;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
