
   var recipes = {}



function updateObjectWithKeyAndValue(object, prop2, value){

   var clone = Object.assign({prop2:value}, object)
  return clone
}


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){

  obj[key] = value
  return obj
}

function deleteFromObjectByKey(object, key){
  var clone = Object.assign(object)
  delete clone.key
  return clone
}

function destructivelyDeleteFromObjectByKey(obj, prop){

   delete obj.prop
   return obj
}
