var recipes = { coffee: 'decaf' };

function updateObjectWithKeyAndValue(object, key, value) {
  return recipes;
}

var newrecipes = { prop: 1 };
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({}, newrecipes, {[key]: value} 
  );
}

