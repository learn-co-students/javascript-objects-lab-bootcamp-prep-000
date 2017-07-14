var recipes = {spices: "cinammon", carbs: "bread"}

function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({}, object, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object,key,value){
  var newObject = Object.assign({},object, {[key]:value})
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromObjectByKey(object,key,value){
  delete object[key]
  return object
}
