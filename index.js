var recipes = {}

// this function nondestructively adds a value by creating a new object. This new object holds our new key:value pair, and then lets us return the new object. This leaves the old object unharmed. It needs to make up the three parameters (object,key,value).
function updateObjectWithKeyAndValue(object, key, value){
  // here the function is being told to return an object that includes the newly assigned key:value pair added onto it. This leaves the original object intact.
  return  Object.assign({},object, {[key]:value})
}

// this function adds a key:value pair to an object and then returns the new mutated object.
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  // Here the object from the parameters is being given a new key:value that will be added to the object. It will now exist within the original object.
  object[key]=value
  return object
}

// this function deletes a key from an object in a non destructive way (Crazy right?), to do this, the function has to declare a new object inside of itself to delete from. This newObj will be assigned the object listed in the parameters, then the function will continue and delete the newObj, finally returning the original object from the parameters.
function deleteFromObjectByKey(object,key){
  var newObj=Object.assign({},object)
  delete newObj[key]
  return object
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object
}
