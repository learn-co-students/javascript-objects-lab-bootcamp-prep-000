var recipes=new Object({})
var updateObjectWithKeyAndValue=(object, key, value)=>{
  var r=new Object()
  r[key]=value
  return Object.assign(r,object)
}
var destructivelyUpdateObjectWithKeyAndValue=(object, key, value)=>{
  object[key]=value
  return object
}
var destructivelyDeleteFromObjectByKey=(object, key)=>{delete object[key]
  return object
}
var deleteFromObjectByKey=(object, key)=>{
  var r=Object.assign({},object)
  delete r[key]
  return r
}
