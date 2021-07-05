var recipes = {meat: 'beef', sauce: 'soy sauce'}

function updateObjectWithKeyAndValue (recipes2, veggi, celery){
  return Object.assign({},recipes2,{[veggi]:celery})
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, fish, salmon){
  recipes[fish] = salmon
  return recipes
}

function deleteFromObjectByKey (object, key){
  var newobj = Object.assign({},object)
  delete newobj[key]
  return newobj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
