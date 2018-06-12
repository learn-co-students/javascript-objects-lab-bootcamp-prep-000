var recipes = {}
function updateObjectWithKeyAndValue(recipes, key, value) {
  var temp
  temp.assign({}, recipes, {[key]: value})
  return temp
  return recipes
}