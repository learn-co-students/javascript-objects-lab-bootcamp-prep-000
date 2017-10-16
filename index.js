var recipes = {}

function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({},object,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  return Object.assign(object,{[key]:value})
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
}

function deleteFromObjectByKey(object,key){
  var tempObj = Object.assign({},object)
  delete tempObj[key]
  return tempObj
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object
}
