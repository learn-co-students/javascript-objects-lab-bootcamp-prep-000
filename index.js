var recipes={}
function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({},object,{[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key]=value
  return object
}
function deleteFromObjectByKey(object,key){
  var tempObject=Object.assign({},object)
  delete tempObject[key]
  return tempObject
}
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object
}
