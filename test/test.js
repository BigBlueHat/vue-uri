var assert = require("assert")
describe('json-textarea', function() {
  var jsonTextarea = require('../src/json-textarea');
  it('should not have data', function() {
    assert.equal(undefined, jsonTextarea.data);
  });
});
