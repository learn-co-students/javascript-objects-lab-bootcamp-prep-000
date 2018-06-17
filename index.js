var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
    //Returns a new object with the original key:value pairs and the new key value pair
  var newObj = Object.assign({},object,{[key]:value});
  return newObj;
  }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  //Updates object with key:value pair and return updated object
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  //Deletes 'key' from a clone of object & returns new object
  var newObj = Object.assign({},object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  //Modifies original object
  delete object[key];
  return object;
}