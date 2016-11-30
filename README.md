# quick-grunt-config-coding-conventions
Module containing a generator for configurations for Grunt tasks for coding-conventions checks.

[![NPM version](http://badge.fury.io/js/quick-grunt-config-coding-conventions.png)](https://npmjs.org/package/quick-grunt-config-coding-conventions "View this project on NPM")
[![Dependency Status](https://david-dm.org/ecdex/quick-grunt-config-coding-conventions.png?theme=shields.io)](https://david-dm.org/ecdex/quick-grunt-config-coding-conventions)
[![Development Dependency Status](https://david-dm.org/ecdex/quick-grunt-config-coding-conventions/dev-status.png?theme=shields.io)](https://david-dm.org/ecdex/quick-grunt-config-coding-conventions#info=devDependencies)


To use, list this package along with grunt-contrib-jshint and grunt-jscs in
your package.json.  Require the other packages from your Gruntfile.js
normally (individually or via matchdep).  Requiring this module returns
a function with the following signature:

`configurationHash = makeConfig(grunt, optionalArrayOfDirectoryNameStrings)`

You can also get the .jscsrc and .jshintrc for your project by creating
symbolic links in the root of your project to the copies of these files
under `node_modules/quick-grunt-config-coding-conventions/`.  (Obviously
if you need customized versions of these files that differ from what
this module provides, you should copy what you like and make an independent
file in your project.  If you edit these files via a symbolic link, your
changes will be lost next time NPM updates the content of this package's
directory.)

A Gruntfile.js that did nothing but install the configuration in this module
could look like:

```JavaScript
function configureGrunt(grunt) {
  require("matchdep").filterDev(["grunt-*", "!grunt-cli"]).forEach(grunt.loadNpmTasks);

  var configuration = {};
  _.merge(configuration, require("quick-grunt-config-coding-conventions")(grunt, ["build_components"]));

  grunt.initConfig(configuration);
}

module.exports = configureGrunt;
```

By default, the configurations created for the jshint and jscs tasks looks for
'*.js' in your projects root directory, and for all files matching `*.js' in
any directory *under* the directories 'app', 'lib', 'test', and 'spec'.  You
can include additional directory trees to scan for JavaScript files by
including each tree's root directory name in the second optional array
argument to the function returned from require.

Directories under any of the roots listed which match the patterns *`node_modules`*
or *`bower_components`* are automatically excluded.


Contributions and suggestions are welcome, including a set of unit tests
covering the existing behavior.  Right now the "reference user" for this
module is [https://github.com/ecdex/tsme.git](https://github.com/ecdex/tsme.git).
Running 'grunt' in that
repository after installing your modified version of this module should
run clean, and should correctly find errors you introduce in JavaScript
files in the 'app' and 'build_components' directories.

If you make/propose changes that are incompatible with the invokation
in ecdex/tsme, please make a matching pull request against that repository.

If you want to introduce unit tests for this module, please introduce a
set of development dependencies that are a subset of those in ecdex/tsme.

Wanted:
* a patch that would remove non-existent and empty directories from
the generated configuration.
