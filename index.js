var recipes = new Object({ });

var obj = {prop: 1 }

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign( {}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj
}


function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj
} 