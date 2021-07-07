var recipes = {};

function updateObjectWithKeyAndValue(obj1,key1,val1){
  var newObj = {};
  Object.assign(newObj,obj1,{[key1]:val1})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object,key){
  var dupe = {}
  Object.assign(dupe,object)

  delete dupe[key]
  return dupe
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object
}
