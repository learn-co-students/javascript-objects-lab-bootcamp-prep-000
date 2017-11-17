var recipes = { eggs: "one", milk: "two" }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
      object[key] = value;
      return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
              delete object[key] ;
              return object;
}

function updateObjectWithKeyAndValue(object, key, value) {
      return Object.assign({}, object, { [key]: value});
}





function deleteFromObjectByKey(object, key) {

      var objj = Object.assign({}, object);

      delete objj[key];

      return objj;




      //delete object[key];
      //return  object;

}
