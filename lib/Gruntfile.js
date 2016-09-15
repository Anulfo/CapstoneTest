module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['../app/**/*.js'],
      options: {
          predef: ["document", "console", "$", "$scope", "firebase", "google"],
          globalstrict: true,
          esnext: true,
        globals: {
          "app": true,
          "angular": true,
          jQuery: true
        }
      }
    },
    watch: {
      javascripts: {
        files: ["../app/**/*.js"],
        tasks: ['jshint']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', "watch"]);

};
