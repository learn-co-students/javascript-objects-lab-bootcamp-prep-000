var recipes = {
  protein: 'eggs',
  seasoning: 'garlic salt',
  veggies: 'broccoli',
  filling: 'cheddar cheese'
};

function updateObjectWithKeyAndValue(object, key, value) {
  recipes['otherVeggie'] = 'onion'
  return recipes;
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, recipes)
  delete newObj.key
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}


