var recipes = {}

function updateObjectWithKeyAndValue(map, dish, recipe) {
  var addition = {[dish]: recipe}
  return Object.assign({}, map, addition)
}

function destructivelyUpdateObjectWithKeyAndValue(map, dish, recipe) {
  map[dish] = recipe
  return map
}

function deleteFromObjectByKey(map, dish) {
  var newMap = Object.assign({}, map)
  delete newMap[dish]
  return newMap
}

function destructivelyDeleteFromObjectByKey(map, dish) {
  delete map[dish]
  return map
}
