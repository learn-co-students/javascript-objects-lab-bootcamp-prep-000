var recipes = { 
  sugar: "1/2 spoon",
  milk: "1.5 cups",
  cereal: "1 bowl"
}

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object, {[key]: value});
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
  
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj.key;
  return obj;
}