var recipes = {one:'oatmeal', two:'smoothie', three:'wholewheatbread'}

function updateObjectWithKeyAndValue(recipes, four, granolabar)
{
  return Object.assign({}, recipes, {[four]:granolabar});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, four, granolabar)
{
  recipes[four] = granolabar;
  return recipes;
}

function deleteFromObjectByKey(recipes, two)
{
  var recipesnw = Object.assign({}, recipes);
  delete recipesnw.two;
  return recipesnw
}

function destructivelyDeleteFromObjectByKey(recipes, two)
{
  delete recipes.two;
  return recipes;
}
