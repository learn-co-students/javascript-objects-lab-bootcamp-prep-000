var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  var recipes = Object.assign({}, object, { [key]: 
value });
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

function deleteFromObjectByKey(object, key) {
    var object = object;
    var recipies = Object.assign({}, object, );
    delete recipies.key;
    return recipies
}

function destructivelyDeleteFromObjectByKey(object, key) {
    delete object.key;
    return object;
}