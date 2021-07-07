var recipes = { object : 'key' }

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({},object,{[key]:value});
  return recipes
}