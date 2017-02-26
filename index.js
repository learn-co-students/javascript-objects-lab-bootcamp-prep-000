var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  //var obj =
  return Object.assign({}, object, { [key]: value });
  //console.log('1st func', object);
  //return object;

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key]
  // console.log('orig obj', object);
  // console.log('newObj', newObj);
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
