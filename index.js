var recipes = {};

function updateObjectWithKeyAndValue(o, k, v) {
  return Object.assign({}, o, {[k]: v});
}

function destructivelyUpdateObjectWithKeyAndValue (o, k, v) {
  o[k] = v;
  return o;
}

function deleteFromObjectByKey(o, k) {
  var o2 = Object.assign({}, o);
  delete o2[k];
  return o2;
}

function destructivelyDeleteFromObjectByKey(o, k) {
  delete o[k];
  return o;
}
