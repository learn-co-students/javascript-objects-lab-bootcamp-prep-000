var recipes = {}

function updateObjectWithKeyAndValue(obj, key, val){
  return Object.assign({},obj,{[key]:val})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val){
  obj[key] = val
  return obj
}

function deleteFromObjectByKey(obj, key){
  var newObj = Object.assign({},newObj,obj)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key]
  return obj
}
