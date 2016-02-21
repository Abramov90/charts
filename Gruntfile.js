module.exports = function (grunt) {

  grunt.initConfig({
    less: {
      options: {
        compress: true,
        yuicompress: true,
        optimization: 2
      },
      development: {
        files: {
          'public/assets/stylesheets/style.css': 'public/assets/less/style.less'
        }
      },
      plugins : {
        files: {
          'public/assets/stylesheets/bootstrap.css': 'public/assets/less/plugins/bootstrap.less'
        }
      }
    },
    watch: {
      styles: {
        files: ['public/assets/less/*.less', 'public/assets/less/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('compile', ['less', 'watch']);


};
