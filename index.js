var recipes = {Object: []}

function updateObjectWithKeyAndValue(object, key, value) {
  var Object = {
    prop: 1,
    prop2: 2
  };
  return (Object);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  var Object = {
    prop: 1,
    prop2: 2
  };
  // const prop2 = '2';
  // Object[prop2]
  return (Object);
}

// function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
//   var Object = { [] };
//
//   return (Object);
// }

function deleteFromObjectByKey(object, key) {
  var Object = {
    prop: 1,
    prop2: 2
  };
  delete Object.prop2
  return (Object);
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var Object = {
    prop: 1,
    prop2: 2
  };
  delete Object.prop
  return ({})
}
