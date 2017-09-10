var recipes={}

function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({},object,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  return Object.assign(object,{[key]:value})
}

function deleteFromObjectByKey(object,key){
  var a = Object.assign({},object)
  delete a[key]
  return a
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object
}
