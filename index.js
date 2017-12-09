var recipes = new Object({ chia: '1 cup', hemp: '2 cups', zinc: '3 cups' });

function updateObjectWithKeyAndValue(recipes, kale, chopped) {
  return Object.assign({}, recipes, { [kale]: chopped });
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, butter, stick) {
    recipes[butter] = stick;
    return recipes;
}

function destructivelyDeleteFromObjectByKey(recipes, chia) {
  delete recipes[chia];
  return recipes;
}

function deleteFromObjectByKey(recipes, key) {
  var prop = Object.assign({}, recipes, { [key]: 'value' }) ;
  delete prop[key];
  return prop;
}




//I didn't think I was gonna make it. Brain power was ebbing, I wasn't really thinking, but I managed to read the instructional sentence over and over until I realized I needed to MAKE a CLONE using a new variable object named prop that would have a new key added by object.assign then I would delete that new key in that new variable object then I would return the leftovers of the new variable object. Hmmmmmm.... There is hope for me yet. 