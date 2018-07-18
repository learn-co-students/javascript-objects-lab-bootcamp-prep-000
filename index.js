var recipes = new Object({cookies: 'flour, sugar, butter, water'});

function updateObjectWithKeyAndValue(object, key, value){
  return object.assign({}, object,{[key]: value});
}

updateObjectWithKeyAndValue(recipes, )