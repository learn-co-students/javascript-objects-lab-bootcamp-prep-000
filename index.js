var recipes = {originalKey:'OriginalValue'}

function updateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({},object,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  return Object.assign(object,{[key]:value})
}

function deleteFromObjectByKey(object,key) {
  var recipesClone = Object.assign({},object)
  delete recipesClone[key]
  return recipesClone
}

function destructivelyDeleteFromObjectByKey(object,key) {
  delete object[key]
  return recipes
}