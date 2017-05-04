var recipes = {
  eggs: '3',
  sugar: '1 cup',
  flour: '1 cup'
};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]:value});
}

function deleteFromObjectByKey(object, key){
  var newrecipe = Object.assign({}, object);
  delete newrecipe.key;
  return newrecipe;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}
