var recipes = {
  eggs: '2'
}

function updateObjectWithKeyAndValue(object, key, value) {
  recipesToo[key] = value;
  var recipesToo = Object.assign({}, object);
  return recipesToo
}
updateObjectWithKeyAndValue(recipes,'prop2',2);