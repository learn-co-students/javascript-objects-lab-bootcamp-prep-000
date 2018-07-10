var recipes = {'plantain':1,
              ' cheese': 2,
              'salami': 2,
              'eggs': 1}


function updateObjectWithKeyAndValue(object,key,value){
  var newR = Object.assign({}, object, { [key]: value })
  return newR
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object,key){
  var newR = Object.assign({}, object)
  delete newR[key]
  return newR
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}