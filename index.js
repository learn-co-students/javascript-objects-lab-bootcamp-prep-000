const recipes = {
  chocolate: "1 cup",
  flour: "2 cups",
  salt: "2 tsp"
};

function updateObjectWithKeyAndValue(obj, key, value){
  return (Object.assign({}, obj, {[key]: value}));
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  let obj = Object.assign({}, object); // the cloned object
  delete obj[key];
  return obj;
}
deleteFromObjectByKey(recipes,'salt');

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key]; 
 }