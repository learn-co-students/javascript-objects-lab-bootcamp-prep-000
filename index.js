var recipes = new Object({})

function updateObjectWithKeyAndValue(object, key, value){
  var update = Object.assign({}, object)
  update[key] = value;
  return update

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object


}

function deleteFromObjectByKey(object, key){
  var derete = Object.assign({}, object)

  delete derete[key]
  return derete


}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object


}
