var recipes = {
  bread: "2 slices",
  peanutbutter: "big spoonfull",
  jelly : "little bit less than peanutbutter"
};

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = Object.assign({}, obj);
  newObj[key]=value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  //var newObj = Object.assign({}, obj);
  obj[key]=value;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj);
  delete newObj[key];
  delete obj[key];
  
  return newObj;
}