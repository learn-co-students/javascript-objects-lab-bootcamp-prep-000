var recipes = new Object();


var obj = { prop: 1};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, obj, {[key]: value });
}

updateObjectWithKeyAndValue(obj, 'prop2', 2);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[key] = value;
   return object;
}

destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2);

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, obj);
  return delete newObj.prop;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}

  //describe('destructivelyDeleteFromObjectByKey(object, key)', function() {
 //   it('returns object without the delete key/value pair', function() {
 //     var obj = { prop: 1 }
 //     var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

 //     expect(newObj['prop']).toBe(undefined)
 //   })

 //   it('modifies the original object', function() {
//      var obj = { prop: 1 }
//      var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

//      expect(obj['prop']).toBe(undefined)
//    })
//  })

//})