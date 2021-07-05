let recipes={}
function updateObjectWithKeyAndValue(object,key,value){
  object[key]=value
  return object
  
}
function updateObjectWithKeyAndValue(object,key,value){
 let newObj = Object.assign({},object,object[key]=value,) 
 return newObj
}
function updateObjectWithKeyAndValue(object,key,value){
  object[key]=value
   return object
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object=Object.assign({},object,object[key]=value)
  return object
}
function deleteFromObjectByKey(object,key){
  let newObj=Object.assign({},object)
  delete newObj[key]
  return newObj;
}
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object;
}