var recipes ={
  
};
function updateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}// it is destructive because it adds a state //of the object
function updateObjectWithKeyAndValue(object, key, value){
  var object2 = Object.assign({prop2:value},object);
  return object2;
  //need {}, as an argument to assign //function
}
function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
  object[key] = value// NOTATION IN THE //BRACKETS
  return object;
}
function deleteFromObjectByKey (object, key){
  var object2 = Object.assign({}, object);
  delete object2[key];
  return object2;
}
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object;
}