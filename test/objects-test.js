/*global describe, it */

const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')


describe('objects', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'objects.js'), 'utf-8')
  })

  it('defines a `recipes` object', () => {
    expect(typeof recipes).to.equal('object')
  })

  describe('updateObjectWithKeyAndValue(object, key, value)', () => {
    it('returns a clone of `object` by adding `key` and `value` (it is non-destructive)', () => {
      var obj = { prop: 1 }

      expect(updateObjectWithKeyAndValue(obj, 'prop2', 2)).to.eql({
        prop: 1,
        prop2: 2
      })

      expect(obj).to.eql({ prop: 1 })
    })
  })

  describe('destructivelyUpdateObjectWithKeyAndValue(object, key, value)', () => {
    it('updates `object` with the given `key` and `value` (it is destructive)', () => {
      var obj = { prop: 1 }

      expect(destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)).to.eql({
        prop: 1,
        prop2: 2
      })

      expect(obj).to.eql({
        prop: 1,
        prop2: 2
      })
    })
  })

  describe('deleteFromObjectByKey(object, key)', () => {
    it('deletes `key` from a clone of object and returns the new object (it is non-destructive)', () => {
      var obj = { prop: 1 }

      expect(deleteFromObjectByKey(obj, 'prop')).to.eql({})
      expect(obj).to.eql({ prop: 1 })
    })
  })

  describe('destructivelyDeleteFromObjectByKey(object, key)', () => {
    it('deletes `key` from object and returns object', () => {
      var obj = { prop: 1 }

      expect(destructivelyDeleteFromObjectByKey(obj, 'prop')).to.eql({})
      expect(obj).to.eql({})
    })
  })
})
