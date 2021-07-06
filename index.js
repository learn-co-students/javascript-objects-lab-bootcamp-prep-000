var recipes = {}

//update recipes object with key and value
function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({[key]:value},object);
}

// destructively update object with key and value
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  return Object.assign(object,{[key]:value})
}

//deletes key from a clone of object and returns a new object (non distructive)
function deleteFromObjectByKey(object,key){
  var newObj = {object}
  delete newObj[key]
  return newObj
}

//deletes key from object distctively, and modifies the original object
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object
}