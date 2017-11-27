var recipes = {
  eggs: 3, 
  flour: 1, 
  'baking soda': 2
};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = assign({}, {[key]: value});
  return newObj;
}