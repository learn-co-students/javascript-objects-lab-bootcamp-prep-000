var recipes = {}

var updateObjectWithKeyAndValue = (xs, x, y) => {
  var ys = Object.assign({}, xs)
  ys[x] = y
  return ys
}

var destructivelyUpdateObjectWithKeyAndValue = (xs, x, y) => {
  xs[x] = y
  return xs
}

var deleteFromObjectByKey = (xs, x) => {
  var ys = Object.assign({}, xs)
  delete ys[x]
  return ys
}

var destructivelyDeleteFromObjectByKey = (xs, x) => {
  delete xs[x]
  return xs
}
