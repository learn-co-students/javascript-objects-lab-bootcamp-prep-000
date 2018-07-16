var recipes = {
  eggs: "2" ,
  milk: "2 cups"
};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value });
}

updateObjectWithKeyAndValue(recipes, "vanilla", "1 tsp");

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value; 
  return object;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, "sugar", "2 cups"); 

function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign({}, object);
  delete newObj[key]; 
  return newObj; 
}

deleteFromObjectByKey(recipes, "eggs");

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]; 
  return object; 
}

destructivelyDeleteFromObjectByKey(recipes, "milk"); 