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

exports.structure_map = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  all_files: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/all_files');
    var expected = grunt.file.read('test/expected/all_files');
    test.equal(actual, expected, 'should describe what the all files behavior is.');

    test.done();
  },
  all_files_md5: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/all_files_md5');
    var expected = grunt.file.read('test/expected/all_files_md5');
    test.equal(actual, expected, 'should describe what the all files md5 behavior is.');

    test.done();
  },
  more_files: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/more_files');
    var expected = grunt.file.read('test/expected/more_files');
    test.equal(actual, expected, 'should describe what the more files behavior is.');

    test.done();
  },
  other_files: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/other_files');
    var expected = grunt.file.read('test/expected/other_files');
    test.equal(actual, expected, 'should describe what the other files behavior is.');

    test.done();
  },
  other_nested_files: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/other_nested_files');
    var expected = grunt.file.read('test/expected/other_nested_files');
    test.equal(actual, expected, 'should describe what the other and nested files is.');

    test.done();
  },
  some_files: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/some_files');
    var expected = grunt.file.read('test/expected/some_files');
    test.equal(actual, expected, 'should describe what the some files behavior is.');

    test.done();
  },
  some_more_files: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/some_more_files');
    var expected = grunt.file.read('test/expected/some_more_files');
    test.equal(actual, expected, 'should describe what the some and more files behavior is.');

    test.done();
  },
  some_other_files: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/some_other_files');
    var expected = grunt.file.read('test/expected/some_other_files');
    test.equal(actual, expected, 'should describe what the some and other files behavior is.');

    test.done();
  }
};
