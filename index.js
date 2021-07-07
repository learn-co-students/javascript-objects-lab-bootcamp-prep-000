var recipes = {}
function updateObjectWithKeyAndValue (o, k, v){
  return Object.assign({}, o, {[k]:v})
}
function destructivelyUpdateObjectWithKeyAndValue(o, k, v){
  return Object.assign(o,{[k]:v})
}
function deleteFromObjectByKey (o,k){
  var temp = {}
  Object.assign(temp, o)
  delete temp[k]
  return temp
}
function destructivelyDeleteFromObjectByKey(o, k){
  delete o[k]
  return o
}
