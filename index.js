var recipes = {
  time: 60,
  milk: 1, //milk is the key and the 1 is the value
  sugar: 2,
};

function updateObjectWithKeyAndValue(object, key, value){
  var newV = Object.assign ({}, object); // creating clone of the object by creating a new variable to reference it
  newV[key]=value; // the new varaible takes a key and gives a value
  return newV;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newV = Object.assign ({}, object); //making a clone of the object
  delete newV[key];//deleting the key in newV(the clone) or you can use the dot notation if you know what the key is EX meals.breakfast
  return newV;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object; 
}
