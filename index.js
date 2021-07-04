//Literal syntax
var recipes = { curry:"curry rice" }


function updateObjectWithKeyAndValue(object, key, value){
  var tempObj = Object.assign({}, object, { [key]:value} );
  return tempObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object,{ [key]:value });
}

function deleteFromObjectByKey(object, key){
  var tempObj = Object.assign({}, object);
  delete tempObj[key];
  return tempObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
  
}