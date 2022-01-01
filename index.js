function updateObjectWithKeyAndValue(obj, key, val) {
  // NON-DESTRUCTIVE!
  let resultObj = {};
  resultObj = Object.assign(resultObj, obj);
  resultObj[key] = val;
  return resultObj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
  obj[key] = val;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  // NON-DESTRUCTIVE!
  let resultObj = {};
  resultObj = Object.assign(resultObj, obj);
  delete resultObj[key];
  return resultObj;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}
