var recipes = {
  breakfast: 'eggs',
  lunch: 'sandwich',
  dinner: 'chicken'
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value })

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value })

}

function deleteFromObjectByKey(object, key) {
  return delete object.key
}

function destructivelyDeleteFromObjectByKey(object, key) {


  delete object[key]
  console.log(object)

  return object
}


destructivelyDeleteFromObjectByKey(recipes, 'dinner')
