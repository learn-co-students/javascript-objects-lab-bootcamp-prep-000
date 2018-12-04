
var recipes = {
  key: "value",
};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value } )
}
