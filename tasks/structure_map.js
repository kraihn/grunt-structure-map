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

  grunt.registerMultiTask('structure_map', 'The best Grunt plugin ever.', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var structureMap = require('structure-map');

    var directories = this.data.src || [];
    if (directories.length === 0) {
      directories.push('dist');
    }

    var options = this.data.options || {};

    // Generate the structure map
    var map = structureMap.map(directories, options);

    // Write the destination file.
    grunt.file.write(this.data.dest, JSON.stringify(map, null, 2));

    // Print a success message.
    grunt.log.writeln('File "' + this.data.dest + '" created.');
    //});
  });

};
