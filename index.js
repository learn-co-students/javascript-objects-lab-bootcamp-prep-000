var recipes = {};

function updateObjectWithKeyAndValue(ob, key, val) {
  return Object.assign({}, ob, {[key]: val});
}

function destructivelyUpdateObjectWithKeyAndValue(ob, key, val) {
  ob[key] = val;
  return ob;
}

function deleteFromObjectByKey(ob, key) {
  var newOb = Object.assign({}, ob);
  delete newOb[key];
  return newOb;
}

function destructivelyDeleteFromObjectByKey(ob, key) {
  delete ob[key];
  return ob;
}