var recipes={}

function updateObjectWithKeyAndValue (recipes,spice,amount){ 
  return Object.assign({}, recipes, { [spice]: amount })
}


function destructivelyUpdateObjectWithKeyAndValue (recipes,spice,amount){ 
  recipes[spice]=amount
  return recipes
}

function deleteFromObjectByKey(recipes, spice) {
  var cocktails= Object.assign({}, cocktails);
  delete cocktails.spice
  return cocktails
}

function destructivelyDeleteFromObjectByKey (recipes, spice){
  delete recipes [spice]
  return recipes
}