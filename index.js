const recipes = {
  flour : '2 cups',
  egg : '4 eggs',
  butter : '1 tablespoon',
  sugar : '3 tablespoon'
};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key] : value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key] : value});
}

function deleteFromObjectByKey(object, key){
  let newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}