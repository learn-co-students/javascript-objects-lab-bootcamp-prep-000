var recipes = {eggs: 3, flour: "1 cup"};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

updateObjectWithKeyAndValue(recipes, flour, "1 cup");

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key]= value;
  return obj;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, flour, "1 cup");

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj);
  delete newObj.key;
  
  return recipes;
}

deleteFromObjectByKey(recipes, eggs);

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return recipes;
  
}

destructivelyDeleteFromObjectByKey();
