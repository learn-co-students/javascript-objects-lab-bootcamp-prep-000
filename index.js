var recipes = {};

function updateObjectWithKeyAndValue(obj, prop1, prop2){
  return Object.assign({}, obj,{[prop1]:prop2})
}
function destructivelyUpdateObjectWithKeyAndValue(obj, prop1, prop2) {
  obj[prop1] = prop2
  return obj
}

function deleteFromObjectByKey(obj, prop1) {
  delete obj['prop1'];
  return obj;
}

function destructivelyDeleteFromObjectByKey(obj, prop1){
  delete obj.prop1;
  return obj; 
}
