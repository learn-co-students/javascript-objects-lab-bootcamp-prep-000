var recipes = {
  prop:1,
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, recipes, {[key]: value})
}

function destructelyUpdateObjectWithKeyAndValue(object, key, value){
  return object[key] = "value"
}
