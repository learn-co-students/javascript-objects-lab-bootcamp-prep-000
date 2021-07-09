
var recipes = {
  chocolate: "two bars",
  sugar: "five cups",
  honey: "seven teaspoons"
}
//object assign where keeps original recipe the same
//and makes new object clone and adds new property
function updateObjectWithKeyAndValue(obj, key, value){
 var newThing = Object.assign({}, obj, {[key]: value})
  return newThing;
}

//object assign where changes original object
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object, key) {
//first assign to new Object as a clone, dont need to write keys, just the old object
//then can safely delete from new object
Object.assign({}, object);
delete Object[key];
return Object;

}



function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
