var recipes = {bread: "flour"}

var updateObjectWithKeyAndValue = function(object , key, value){
  const clone1 = Object.assign({}, object)
  clone1[key]= value
  return clone1
  
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, prop, value){
  object[prop]= value
  return object
}

var deleteFromObjectByKey = function(object, key){
  const clone = Object.assign({}, object)
  delete clone[key]
  return clone
}

var destructivelyDeleteFromObjectByKey = function(object,key){
  delete object[key]
  return object 
}









console.log(updateObjectWithKeyAndValue(recipes, "lasangna" ,"sauce"))
// console.log(destrutivelyUpdateWithkeyAndValue(recipes, "save", "me"))
// console.log(deleteFromObjectByKey(recipes, "lasangna"))
console.log(destructivelyDeleteFromObjectByKey(recipes, "lasangna"))