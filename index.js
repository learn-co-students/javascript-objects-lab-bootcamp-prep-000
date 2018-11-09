var recipes = {mac: "cheese"}

function updateObjectWithKeyAndValue(recipes, mac, cheese) {
  return Object.assign({}, recipes, { [mac]:"milk"})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, mac, cheese) {
  recipes.mac = ["milk"];
  return recipes;
}

function deleteFromObjectByKey(recipes, mac) {
  return delete recipes.mac;
}

function destructivelyDeleteFromObjectByKey(recipes, mac) {
  return delete recipes[mac];
}
