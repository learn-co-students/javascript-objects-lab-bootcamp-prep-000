var recipes = {}

function updateObjectWithKeyAndValue(obj,key,value){
  var update = {}
  update[key] = value
  var updated_obj = Object.assign({},obj,update)
  return updated_obj
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj,key){
  var obj_to_delete_from = Object.assign({},obj)
  delete obj_to_delete_from[key]
  return obj_to_delete_from
}

function destructivelyDeleteFromObjectByKey(obj,key){
  delete obj[key]
  return obj
}
