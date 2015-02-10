module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            js: {
                src: [
                    'assets/bower_components/jquery/dist/jquery.js',
                    'assets/js/app.js'
                ],
                dest: 'assets/js/app.concat.js'
            }
        },
        uglify: {
            build: {
                src: 'assets/js/app.concat.js',
                dest: 'assets/js/app.min.js'
            }
        },
        stylus: {
            compile: {
                files: {
                    'assets/css/app.min.css': 'assets/css/app.styl'
                }
            }
        },
        watch: {
            js: {
                files: [
                    'assets/bower_components/**/*.js',
                    'assets/js/**/!(app.min|app.concat).js'
                ],
                tasks: ['javascript'],
                options: {
                    livereload: true,
                }
            },
            css: {
                files: [
                    'assets/css/**/*.styl'
                ],
                tasks: ['stylesheets'],
                options: {
                    livereload: true,
                }
            }
        },

        php: {
            test: {
                options: {
                    keepalive: true,
                    port: 5000,
                    open: true
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-php');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('javascript', [
        'concat:js',
        'uglify'
    ]);
    grunt.registerTask('stylesheets', [
        'stylus'
    ]);

    grunt.registerTask('test', ['php', 'mocha']);

    grunt.registerTask('default', ['javascript', 'stylesheets', 'watch', 'php']);
};