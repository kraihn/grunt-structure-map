/*
 * grunt-structure-map
 * https://github.com/kraihn/grunt-structure-map
 *
 * Copyright (c) 2015 Jared Dickson
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('structure_map', 'A grunt plugin used to generate a JSON formatted structure map of a project directory.', function () {

    var structureMap = require('structure-map');

    // Set default output if none is given
    if (!this.data.dest) {
      this.data.dest = 'structure-map.json';
    }

    // Setup directories and directory default
    var directories = this.data.src || [];
    if (directories.length === 0) {
      directories.push('.');
    }

    // Setup options and option defaults
    var options = this.data.options || {};
    if (this.data.cwd) {
      options.cwd = this.data.cwd;
    }

    // Generate the structure map
    var map = structureMap.map(directories, options);

    // Write the destination file.
    grunt.file.write(this.data.dest, JSON.stringify(map, null, 2));

    // Print a success message.
    grunt.log.writeln('File "' + this.data.dest + '" created.');
    //});
  });

};
