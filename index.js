var recipes = {step: 'todo'}

function updateObjectWithKeyAndValue(recipes, step, todo){
  recipes[step] = todo
  return recipes
}

function updateObjectWithKeyAndValue(recipes, step, todo){
  return Object.assign({}, recipes, {[step]: todo})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, step, todo){
  recipes[step] = todo
  return recipes
}

function deleteFromObjectByKey(recipes, step){
  var newObj = Object.assign({}, recipes)
  delete newObj[step]
  return newObj
}

function destructivelyDeleteFromObjectByKey(recipes, step){
  delete recipes[step]
  return recipes
}