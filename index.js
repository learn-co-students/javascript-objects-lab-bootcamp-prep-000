var recipes = {cookies: "flour"}

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = new Object()
  newObj = Object.assign(object, object[key]=value)
  return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key){
  var newObj = new Object()
  newObj = Object.assign({}, object)
  newObj[key].delete
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key){
  object[key].delete
  return object 
}
