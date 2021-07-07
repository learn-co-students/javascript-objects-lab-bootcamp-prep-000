var recipes = {key: 'value'};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object.prop2 = '2';
  return object
}

function deleteFromObjectByKey(object, key) {
  let newObj = Object.assign({}, object) //make a copy
  delete newObj[key] //delete the key from copy
  return newObj //return the copy
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object
}