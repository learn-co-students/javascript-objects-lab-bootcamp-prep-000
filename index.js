var recipes = {
  Cake : "Flour"
};

function updateObjectWithKeyAndValue (obj, kiy, val) {
  return Object.assign({}, obj, {[kiy]:val});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, kiy, val) {
  obj[kiy] = val;
  return obj;
  
}

function destructivelyDeleteFromObjectByKey (obj, kiy, val) {
  delete obj[kiy];
  return obj;
}

function deleteFromObjectByKey(obj, kiy, val) {
  var newObj = Object.assign({}, recipes);
  delete newObj.kiy;
  return newObj;
}