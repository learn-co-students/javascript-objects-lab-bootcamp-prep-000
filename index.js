var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object);
  newObject[key] = value;
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object = {[key]: value};
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object);
  delete newobj.key;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key){
  var object  = object.key;
  delete object.key;
  return object;
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object = {[key]: value};
  return object;
}


function deleteFromObjectByKey(object, key){
     var newObj = Object.assign({}, object);
     delete newobj.key;
     return object;
}

function destructivelyDeleteFromObjectByKey(object, key){
    var object  = object.key;
    delete object.key;
   return object;
}
