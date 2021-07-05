var recipes = { flour: '1 cup',
                eggs: '2',
                sugar: '1/2 cups',
                milk: '1/3 cups'
}

function updateObjectWithKeyAndValue (object, key, value){
  return Object.assign( {}, object, { [key]: value} )
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey (object, key){
  let newRecipes = delete object.key;
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey (object, key){
  return delete object[key];
}

