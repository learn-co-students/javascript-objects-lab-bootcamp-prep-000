var recipes = {name: "ingredients"};

function updateObjectWithKeyAndValue(object, key, value){
  var x= Object.assign({}, object, {[key]: value}); //retun a clone of the original
  return x;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
object = Object.assign(object, {[key]: value}); //object with new pair, modify original object
   return object;
}

function deleteFromObjectByKey(object, key){
   var x = Object.assign({}, object);
   delete x[key]; // deletes key from clone of object (non-destructive)
  return x;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object; //object without deleted pair, modify original object
}
