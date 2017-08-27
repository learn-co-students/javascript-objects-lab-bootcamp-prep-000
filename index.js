var recipes = {egg: 2, butter: '3 spoon'}
function updateObjectWithKeyAndValue(object, key, value) {
  var obj = {prop: 1}
  Object.assign({}, obj, {prop2: 2})
  return Object.assign({}, obj, {prop2: 2})
}
