module.exports = function(grunt) {
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: "im",
          sizes: [
            {
              name: 'default',
              width: '100%',
              height: '100%',
              quality: 60
            },
            {
              name: 'thumbnail',
              width: '100px',
              quality: 30
            }
          ]
        },
        files: [{
          expand: true,
          src: ['**.{jpg,gif,png}'],
          cwd: "img/",
          dest: "img/resp/"
        },
        {
          expand: true,
          src: ['**.{jpg,gif,png}'],
          cwd: "views/images/",
          dest: "views/images/resp/"
        }]
      }
    },
    clean: {
      dev: {
        src: ["img/resp", "views/images/resp"]
      }
    },
    htmlmin: {
      dev: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['*.html'],
          dest: "./"
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['clean', 'responsive_images', 'htmlmin']);
}
