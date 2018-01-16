var recipes = {}

function updateObjectWithKeyAndValue(obj,key,val){
  var newObj = {}


  return Object.assign(newObj,obj,{[key]: val})
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,val){
  obj[key] = val
  return obj
}



function deleteFromObjectByKey(obj,key){
  //create new Obj
  var newObj = {}
  //make newObj a copy of obj
  Object.assign(newObj,obj)
  //delete key from newObj
  delete newObj[key]
  //return newObj
  return newObj
}
function destructivelyDeleteFromObjectByKey(obj,key,val){
  delete obj[key]
  return obj
}
