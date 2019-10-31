var recipes= {lunch: 'salad'}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj[key] = value
  return obj
}
function updateObjectWithKeyAndValue(obj,key,value){
  return Object.assign({},obj,{[key]:value})
}
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object
}
function deleteFromObjectByKey(object,key,value){
  var obj = {key:value}
  var newObj = Object.assign({},obj)
  delete newObj.key
  return obj
}
