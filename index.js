var recipes = {grahamCrackers:'2',chocoSquares:'3',marshmallows:'1, melted'}

function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({},object,{[key]:value})
}
//this updates "recipe" nondestructively

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key]=value
  return object
}
//this changes the original "recipe" object

function deleteFromObjectByKey(object,key){
  var newObj=Object.assign({},object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object
}