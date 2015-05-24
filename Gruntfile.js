/*
 * grunt-structure-map
 * https://github.com/kraihn/grunt-structure-map
 *
 * Copyright (c) 2015 Jared Dickson
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    structure_map: {
      all_files: {
        src: ['test/fixtures'],
        dest: 'tmp/all_files'
      },
      all_files_md5: {
        options: {
          hashAlgorithm: 'md5'
        },
        src: ['test/fixtures'],
        dest: 'tmp/all_files_md5'
      },
      some_files: {
        src: ['test/fixtures/some'],
        dest: 'tmp/some_files'
      },
      other_files: {
        src: ['test/fixtures/other'],
        dest: 'tmp/other_files'
      },
      more_files: {
        src: ['test/fixtures/more'],
        dest: 'tmp/more_files'
      },
      some_more_files: {
        src: ['test/fixtures/some', 'test/fixtures/more'],
        dest: 'tmp/some_more_files'
      },
      some_other_files: {
        src: ['test/fixtures/some', 'test/fixtures/other'],
        dest: 'tmp/some_other_files'
      },
      other_nested_files: {
        src: ['test/fixtures/other', 'test/fixtures/some/nested'],
        dest: 'tmp/other_nested_files'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'structure_map', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
