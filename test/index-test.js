/*global describe, it */

describe('Objects', function() {
  describe('updateObjectWithKeyAndValue(object, key, value)', function() {
    it('returns an object with the orignal key value pairs and the new key value pair', function() {
      var obj = { prop: 1 }

      expect(updateObjectWithKeyAndValue(obj, 'prop2', 2)).toMatch({
        prop: 1,
        prop2: 2
      })
    })

    it('does not modify the original object, but rather returns a clone with the new data', function() {
      var obj = { prop: 1 }

      updateObjectWithKeyAndValue(obj, 'prop2', 2)

      expect(obj['prop2']).toBe(undefined)
    })
    
    it('returns an object with an updated key value pair', function() {
      var obj = { prop: 'old value' }

      var newObj = updateObjectWithKeyAndValue(obj, 'prop', 'new value')

      expect(newObj['prop']).toBe('new value')
    })
  })

  describe('destructivelyUpdateObjectWithKeyAndValue(object, key, value)', function() {
    it('updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object', function() {
      var obj = { prop: 1 }

      expect(destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)).toMatch({
        prop: 1,
        prop2: 2
      })

      expect(obj).toMatch({
        prop: 1,
        prop2: 2
      })
    })
  })

  describe('deleteFromObjectByKey(object, key)', function() {
    it('deletes `key` from a clone of object and returns the new object (it is non-destructive)', function() {
      var obj = { prop: 1 }
      var newObj = deleteFromObjectByKey(obj, 'prop')

      expect(newObj['prop']).toBe(undefined)
    })

    it('does not modify the original object (it is non-destructive)', function() {
      var obj = { prop: 1 }

      deleteFromObjectByKey(obj, 'prop')
      expect(obj['prop']).toBe(1)
    })
  })

  describe('destructivelyDeleteFromObjectByKey(object, key)', function() {
    it('returns object without the delete key/value pair', function() {
      var obj = { prop: 1 }
      var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

      expect(newObj['prop']).toBe(undefined)
    })

    it('modifies the original object', function() {
      var obj = { prop: 1 }
      var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

      expect(obj['prop']).toBe(undefined)
    })
  })

})
