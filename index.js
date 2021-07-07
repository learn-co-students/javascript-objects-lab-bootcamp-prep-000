var recipes = {
  prop:1,
  prop2:2
};

function updateObjectWithKeyAndValue(object, key, value){
  recipes[key] = value;
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[key] = value;
   return object;
}

function deleteFromObjectByKey(object, key) {
  object = ({}, key);
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
(delete object.prop);
  return object;
}