'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.typescript = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  foo: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/foo.js');
    var expected = grunt.file.read('test/expected/foo.js');
    test.equal(actual, expected, 'compiles expected js output');

    test.done();
  },
  bar: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/bar.js');
    var expected = grunt.file.read('test/expected/bar.js');
    test.equal(actual, expected, 'compiles expected js output');

    test.done();
  },
};
