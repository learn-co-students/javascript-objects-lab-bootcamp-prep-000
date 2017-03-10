var recipes = {
  "eggs" : 2,
  "flour" : "1 cup",
  "water" : "2 cups"
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},object,{[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key1,val1) {
  obj[key1]=val1;
  return obj;
}

function deleteFromObjectByKey(obj1,key2) {
  var cloned = Object.assign({},obj1);
  delete cloned[key2];
  return cloned;
}

function destructivelyDeleteFromObjectByKey(obj2,key3) {
  delete obj2[key3];
  return obj2;
}
