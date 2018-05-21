var recipes = { siga: "2 kilo" }


function updateObjectWithKeyAndValue(object, key, value){
 return Object.assign({}, object, { [key]: value})
  } 

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object;
}
 function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object) 
    delete newObject.key 
    return Object;
 }

