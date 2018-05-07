var recipes= {
  sugar: "3 tablespoons",
  water: "4 cups",
  condensedMilk: "1 cups",
  homogenizedMilk: "2 cups"
  }

function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({[key]:value},object)
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
    object[key]=value
  return object;
}
function deleteFromObjectByKey(object,key){
  Object.assign({},object)
  delete {}.key
  return {}
}
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object
}

