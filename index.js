var recipes = {
  ingredient1: "bread",
  ingredient2: "mild cheese",
  ingredient3: "sharp cheese",
  ingredient4: "butter",
  ingredient5: "tomato",
  ingredient6: "garlic",
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
