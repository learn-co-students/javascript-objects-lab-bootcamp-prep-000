var recipes = {
  oats:"2 cups",
  butter:"1 cup",
  sugar:"1.5 cups",
  milk:"half cup",
  cocoa:"5 tbsp",
  vanilla:"2 tsp"
}

var props = {
  prop:"1"
}

function updateObjectWithKeyAndValue(props, prop2, amount){
  return Object.assign({}, props, {[prop2]: "2"})
}

function destructivelyUpdateObjectWithKeyAndValue(props, prop2, amount){
  props.prop2 = "2"
  return props
}

function deleteFromObjectByKey(props, prop){
  var newObj = Object.assign({}, props)
  delete newObj.prop
  return newObj
}

function destructivelyDeleteFromObjectByKey(props, prop){
  delete props.prop
  return props
}
