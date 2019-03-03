var recipes={};

function updateObjectWithKeyAndValue(x,y,z){
  return Object.assign({},x,{[y]:z})
}

function destructivelyUpdateObjectWithKeyAndValue(x,y,z){
  x[y]=z
  return x
}

function deleteFromObjectByKey(x,y){
  var k={}
  var k=Object.assign({},x)
  delete k[y];
  return k
}

function destructivelyDeleteFromObjectByKey(x,y){
  delete x[y];
  return x
}