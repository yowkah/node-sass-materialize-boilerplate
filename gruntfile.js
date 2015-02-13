module.exports = function(grunt){
  grunt.initConfig({
    sass : {
      dist: {
        files : {
          'public/stylesheets/application.css' : 'sass/application.scss'
        },
        options : {
          includePaths : [
            './bower_components/materialize/sass/', 'sass/'
          ]
        }
      }
    },
    bower_concat : {
      all:{
        dest : 'public/js/_bower.js',
        exclude : []
      }
    },
    concat : {
      dist: {
        src : [
           'public/js/_bower.js','scripts/*.js'
        ],
        dest : "public/js/scripts.js"
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'bower_components/materialize/font/',
        src: '**',
        dest: 'public/font/',
      },
    },
    watch : {
      source : {
        files: ['sass/**/*.scss','scripts/**/*.js'],
        tasks: ['sass','concat:dist']
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass:dist','bower_concat:all', 'concat:dist']);
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('buildBoilerPlate', ['sass','bower_concat:all','concat:dist', 'copy;main']);
}