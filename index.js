var recipes = {
  ingredient1: "Bacon",
  ingredient2: "Lettuce",
  ingredient3: "tomato",
  ingredient4: "Waffles"
} ;

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
    return obj 
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function deleteFromObjectByKey(object, key) {
  const newObj = Object.assign({}, object)
delete newObj[key]

  return newObj
}

 function destructivelyDeleteFromObjectByKey(object, key) {
   delete object[key]
   return object 
 }
