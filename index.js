var recipes = {
  eggs: '2 dozen'
}

function updateObjectWithKeyAndValue(obj,key,value){
  var newObj = new Object()
  newObj[key] = value
  return Object.assign({},obj,newObj)
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj[key]=value
  return obj
}

function deleteFromObjectByKey(obj,key){
  var cloneObj = Object.assign([],obj)
  delete cloneObj[key]
  return cloneObj
}

function destructivelyDeleteFromObjectByKey(obj,key){
  return delete obj[key]
}