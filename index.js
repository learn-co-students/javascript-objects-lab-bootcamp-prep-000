var recipes = {typeof:'recipes'};
function updateObjectWithKeyAndValue(recipes, prop2, value) {
  return Object.assign({prop: 1}, {prop2: 2});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, prop2, 2)
}