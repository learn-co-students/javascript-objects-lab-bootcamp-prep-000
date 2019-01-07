//Using literal notation:
var recipe = {};
 
// Using a constructor: 
//var recipe = new object();

var obj = {prop: 1};
console.log(obj);  

//Non-destructive, using Object.assign()  
function updateObjectWithKeyAndValue(object, key, value){
  var object2 = Object.assign({[key]:value}, object);
  return object2;
}

console.log(updateObjectWithKeyAndValue(obj, 'prop2', 2));

//Destructive approach
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

console.log(destructivelyUpdateObjectWithKeyAndValue (obj, 'prop2', 2));

function deleteFromObjectByKey(object, key){
  var object2 = delete object[key];
  return object2;
}

console.log(deleteFromObjectByKey(obj, 'prop'));
console.log(obj);

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}

console.log(destructivelyDeleteFromObjectByKey(obj, 'prop'));