var recipes = new Object()

function updateObjectWithKeyAndValue(list, key, value){
  return Object.assign(list, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(list, key, value){
  list[key] = value
  return list
}

function deleteFromObjectByKey(list, key){
  var temp = Object.assign({}, list)
  delete temp[key]
  return temp
}

function destructivelyDeleteFromObjectByKey(list, key){
  delete list[key]
  return list
  
}