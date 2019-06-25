var recipes = {};



/*correct
*/

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}


/*correct
*/

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]: value})
}

/*correct
*/

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}


/* correct
*/
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}



