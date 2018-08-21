var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) { return Object.assign({},object,{[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key]=value;
 return object;
}

function deleteFromObjectByKey(object, key) {
  let obj2 = Object.assign({},object);
  delete obj2[key];
  return obj2;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  let obj2 = Object.assign(object);
  delete obj2[key];
  return obj2;
}