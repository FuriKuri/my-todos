module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'lib/**/*.js', 'spec/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    jscs: {
        src: ['Gruntfile.js', 'lib/**/*.js', 'spec/**/*.js'],
        options: {
          config: '.jscsrc'
        }
    },
    jasmine_node: {
      options: {
        coverage: {},
        forceExit: true,
        match: '.',
        matchall: false,
        extensions: 'js',
        specNameMatcher: 'spec',
        junitreport: {
          report: true,
          savePath : './build/reports/jasmine/',
          useDotNotation: true,
          consolidate: true
        },
        coverage: {
          reportFile: 'coverage.json',
          print: 'summary', // none, summary, detail, both
          relativize: true,
          thresholds: {
            statements: 0,
            branches: 0,
            lines: 0,
            functions: 0
          },
          reportDir: 'coverage',
          report: [
            'lcov'
          ],
          collect: [ // false to disable, paths are relative to 'reportDir'
            '*coverage.json'
          ],
          excludes: []
        }
      },
      src: ['lib/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-jasmine-node-coverage');
  grunt.registerTask('default', ['jscs', 'jshint']);
  grunt.registerTask("tests", ["jasmine_node"]);
};