var recipes = {};
//--- my Notes
// the object will not be destructed here, we use Object.assign
//and we return it on the same line
//key is in between brackets, values are not in double quote

function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({}, object, {[key]: value}) 
}

//unlike key-value pairs inside objects,
//when inside functions, there are no quotes

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

// deleting by key : we will not modify the original object, so we clone it
function deleteFromObjectByKey(object, key){
 var myCopy = Object.assign({}, object)
 // now we have object = myCopy , so we can delete the key from it
 delete myCopy[key]
 return myCopy
}


// destructively delete is the most common and simple way
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

