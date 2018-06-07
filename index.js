var recipes ={'chocolate cake': 'page 2',
  'raspberry truffle': 'page 3'};

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value;
  return recipes;
}

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, { [key]: value });
}

function deleteFromObjectByKey(recipes, key){
  var newObj = Object.assign({}, recipes);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key];
  return recipes;
}


