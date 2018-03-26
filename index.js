var recipes = {
  macNCheese: ["macaroni", "cheese", "milk"],
  greenTea: ["hot water", "gren tea bag", "sugar"],
  raisinBranCereal: ["milk", "cereal", "5 min wait"]
};
function updateObjectWithKeyAndValue(object, key, value) {
 object = Object.assign({}, object) 
 object[key] = value;
 return object;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  object = Object.assign({}, object);
  delete object[key]
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}