var recipes = {}

var blank = {}

var updateObjectWithKeyAndValue = function(object,key,value){
  return Object.assign(blank,object,{
    [key]:value
  })
}

var destructivelyUpdateObjectWithKeyAndValue = function(object,key,value){
  return Object.assign(object,{
    [key]:value
  })
}

var deleteFromObjectByKey = function(object,key){
  blank = recipes;
  delete blank[key];
  return blank;
}

var destructivelyDeleteFromObjectByKey = function(object,key){
  delete object[key];
  return object;
}