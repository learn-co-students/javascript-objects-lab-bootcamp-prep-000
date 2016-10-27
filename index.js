var recipes = {};                                                           //create an object called recipes

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key] : value});                      //return non-destructive object that adds key and value
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;                                                    // key and value to object destructively
  return object;                                                          //return the new contents of object
}

function deleteFromObjectByKey(object, key){
  var box = Object.assign({}, object, {key:""});                           //create a clone of object and it's key-value combo and put it in box
  delete box.key;                                                          //delete the key-value combo from box but not from object
  return box;                                                             //return the contents of box
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;                                                       //delete key-value pair from object
  return object;                                                          //return contents of object
}
