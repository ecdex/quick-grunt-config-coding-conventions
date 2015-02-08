var _ = require("lodash"),
    path = require("path");

function configureGrunt(grunt) {
  require("matchdep").filterDev(["grunt-*", "!grunt-cli"]).forEach(grunt.loadNpmTasks);

  var configuration = {},
      pathToSelf = path.join("..", "index.js").replace("..", ".");
  _.merge(configuration, require(pathToSelf)(grunt, ["build_components"]));

  grunt.registerTask("default", "run everything defined", ["jshint", "jscs"]);
  grunt.initConfig(configuration);
}

module.exports = configureGrunt;
