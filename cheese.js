var recipes = new Object({ eggs: 'cheese' });

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  console.log(object)
}


updateObjectWithKeyAndValue(recipes, 'cheese', 'eggs')
