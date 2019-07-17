var recipes = {};

function updateObjectWithKeyAndValue(obj,key,value){
  var newObj=Object.assign({},obj,{[key]: value})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj[key]=value;
  return obj
}
 function deleteFromObjectByKey(obj,key){
   var newObj=Object.assign({},obj)
   delete newObj[key]
   return newObj
 }
 
 function destructivelyDeleteFromObjectByKey(obj,key){
   delete obj[key]
   return obj
 }


//   describe('deleteFromObjectByKey(object, key)', function() {
//     it('deletes `key` from a clone of object and returns the new object (it is non-destructive)', function() {
//       var obj = { prop: 1 }
//       var newObj = deleteFromObjectByKey(obj, 'prop')

//       expect(newObj['prop']).toBe(undefined)
//     })

//     it('does not modify the original object (it is non-destructive)', function() {
//       var obj = { prop: 1 }

//       deleteFromObjectByKey(obj, 'prop')
//       expect(obj['prop']).toBe(1)
//     })
//   })

//   describe('destructivelyDeleteFromObjectByKey(object, key)', function() {
//     it('returns object without the delete key/value pair', function() {
//       var obj = { prop: 1 }
//       var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

//       expect(newObj['prop']).toBe(undefined)
//     })

//     it('modifies the original object', function() {
//       var obj = { prop: 1 }
//       var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

//       expect(obj['prop']).toBe(undefined)
//     })
//   })

// })
