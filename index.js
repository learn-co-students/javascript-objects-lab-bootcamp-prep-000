var recipes = {}

function updateObjectWithKeyAndValue(obj,newkey,newvalue){
  var newobj = Object.assign({},obj)
  newobj[newkey] = newvalue
  return newobj
}

function destructivelyUpdateObjectWithKeyAndValue(obj,newkey,newvalue){
  obj[newkey]=newvalue
  return obj
}

function deleteFromObjectByKey(obj,delkey){
  var newobj = Object.assign({},obj)
  delete newobj[delkey]
  return newobj
}

function destructivelyDeleteFromObjectByKey(obj,delkey){
  delete obj[delkey]
  return obj
}