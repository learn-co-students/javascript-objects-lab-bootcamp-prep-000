var recipes= {types:'typeof'}

function updateObjectWithKeyAndValue (object, key, value){
object['prop2']='2'

return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object ['prop2']='2'

  return object
}

function deleteFromObjectByKey(object,key){
  Delete [object]='1'
  return object
}

Object.assign({ prop: '1'})
function deleteFromObjectByKey(object,key){
  return Object.assign({ prop: '1'})
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object ['prop']
  return object
}
