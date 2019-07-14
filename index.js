const recipes = {}

const updateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign({}, object, { [key]: value })
}

const destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign(object, { [key]: value })
}

const deleteFromObjectByKey = (object, key) => {
  const tempObj = Object.assign({}, object)
  return delete tempObj[key]
}

const destructivelyDeleteFromObjectByKey = (object, key) => {
  return delete object[key]
}