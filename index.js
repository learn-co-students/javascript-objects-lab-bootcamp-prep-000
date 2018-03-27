var recipes = {chocolate:'bars',vanille:'wafers'}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })

}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}
function deleteFromObjectByKey(object, key){
  var newObjj = Object.assign({},object)
  delete newObjj[key]
  return newObjj
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
