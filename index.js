var recipes = {beans: 'rice'} //define an empty recipes object

function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, {[key]: value})
    //return Object.assign(object,{[key]:value})
}
//console.log(updateObjectWithKeyAndValue(recipes,"chicken", 'rice'))


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({},object)
  //console.log(newObj)
  delete newObj[key];
  //console.log(newObj)
  return newObj
}

//deleteFromObjectByKey(recipes,'beans')

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}

//console.log(destructivelyDeleteFromObjectByKey(recipes,"beans"))
