var recipes = { ingredients: 'measurment' };

function updateObjectWithKeyAndValue(object, key, value) { 
  return Object.assign(object, { [key]: value });
}
//non destructive updates original object

function updateObjectWithKeyAndValue (object, key, value) { 
 var newObj = Object.assign({}, object, { [key]: value });
 return newObj;
}
// non destructive gives new object with update

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
// modifies the original object

function deleteFromObjectByKey(object, key){
      var newObject = Object.assign({}, object);
   newObject;
   delete newObject[key];
   return newObject;
}
//assigns a new object and modifies the new object

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
// modifies the original object