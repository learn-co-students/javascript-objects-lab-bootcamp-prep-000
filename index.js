var recipes = new Object({ key: 'value'})

function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign({}, object, {[key]:value})
}
//non destructive
function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
  object[key] = value
  return object;
}
//destructive and returns entire updated object
function deleteFromObjectByKey(object,key){
  var newOb = Object.assign({}, object)
  delete newOb[key];
  return newOb;
}
//non destructive
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object;
}
//destructive
