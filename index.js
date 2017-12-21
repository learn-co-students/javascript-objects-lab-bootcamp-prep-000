var recipes = {
  eggs: '3',
  flour: '1',
  sugar: '0.5',
  solt: 'by taste'
}

/*function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object);
  newObject[key] = value;
 return newObject;
   }
function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object, { [key]: value });
 return newObject;
   }*/
   
   function updateObjectWithKeyAndValue(object, key, value) {
  
 return Object.assign({}, object, {[key]: value});
   }
   
   
   
function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
}
 
function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, Object);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}