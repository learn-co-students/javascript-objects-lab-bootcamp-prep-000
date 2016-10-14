var recipes = {true:"ness"}

function updateObjectWithKeyAndValue(object, key, value){
var newObject = Object.assign({[key]:value}, object)
return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key]=value
  return object
  //Object.assign({[key]:value},object)
  //return object
}

function deleteFromObjectByKey(recipes,key){

var newObj = Object.assign({}, recipes) //create new object clone of recipes
delete newObj.key //delete the key (and thus value) from the new object
return newObj //return the new object clone, leaving the original object untouched
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object.key
  return object
}
