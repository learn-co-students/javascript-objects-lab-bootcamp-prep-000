var recipes = {bananas:200}

function updateObjectWithKeyAndValue(obj,key,value){
  return Object.assign({},obj,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value)
{
  //change obj argument by adding new key value pair
  obj[key] = value
  
  return obj
}

function deleteFromObjectByKey(obj,key)
{
  //create a duplicate of obj so that obj can remain unchanged
  
  var obj1 = Object.assign({},obj)
  delete obj1[key]
  return obj1
}


function destructivelyDeleteFromObjectByKey(obj,key){
  delete obj[key]
  return obj
}
