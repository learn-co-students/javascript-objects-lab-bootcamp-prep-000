var recipes = new Object({})


function updateObjectWithKeyAndValue(obj,key,value){
  var res = Object.assign({},obj,{[key]:value})
  return res

}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj[key]=value
  return obj
}

function deleteFromObjectByKey(obj,key){
  var res= Object.assign({},obj)
  delete res[key]
  return res

}
function destructivelyDeleteFromObjectByKey(obj,key){
  delete obj[key]
  return obj
}
