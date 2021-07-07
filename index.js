var recipes = {object: 'John'}

function updateObjectWithKeyAndValue(object, key, value){
  ///console.log( Object.assign({},object, {key: value}))
return   Object.assign({},object, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]= value
  return object
}
function deleteFromObjectByKey(object, key){
  return delete Object.assign({},object).key
}
function destructivelyDeleteFromObjectByKey(object, key){
  console.log(object)
  return delete object[key]
}
