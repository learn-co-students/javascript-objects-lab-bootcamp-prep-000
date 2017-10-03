var recipes = {}
function updateObjectWithKeyAndValue(object, key, value){
    return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}

function deleteFromObjectByKey(object, key){
<<<<<<< HEAD
var nObj = Object.assign({}, object, key)
delete nObj[key]
return nObj
}

function destructivelyDeleteFromObjectByKey (object, key) {
  delete object[key]
  return object
=======
return Object.assign({}. object, [key])
>>>>>>> 3c7556cd829edd487c6de8e22876fd11b0431bc4
}
