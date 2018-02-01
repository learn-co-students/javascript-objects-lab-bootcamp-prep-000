const recipes = {
  stepOne: 'add flour',
  stepTwo: 'add milk',
  stepThree: 'cook',
  stepFour: 'enjoy'
};


function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value} )
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key, value) {
  const newObject = Object.assign({}, object, {[key]: value});
  delete newObject[key];
  return newObject

}

function destructivelyDeleteFromObjectByKey(object, key, value) {
  delete object[key];
  return object

}
