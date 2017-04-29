var recipes = {salam: "sal", bah: "bahbah"};

function updateObjectWithKeyAndValue(o, k, v){
  return Object.assign({}, o , {[k]: v});
};

function destructivelyUpdateObjectWithKeyAndValue(o, k, v){
  o[k] = v;
  return o;
};

function deleteFromObjectByKey(o, k){
  delete o.k;
  return o;
};

function destructivelyDeleteFromObjectByKey(o, k){
  delete o.k;
  return o;
};