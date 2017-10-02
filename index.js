var recipes = new Object()

function updateObjectWithKeyAndValue(object,key,value) {
  var obj=new Object()
  obj[key]=value
  return Object.assign({},object,obj)
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  var obj=new Object()
  obj[key]=value
  return Object.assign(object,obj)
}

function deleteFromObjectByKey(object,key){
  var obj=Object.assign({},object)
  delete obj[key]
  return obj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
