module.exports = {
  proxies: null,

  paths: {
    html: {
      src: ['www/app/**/*.html'],
      dest: "www/build"
    },
    sass: {
      src: ['www/app/app.+(ios|md).scss'],
      dest: 'www/build/css',
      include: ['node_modules/ionic-framework']
    },
    fonts: {
      src: ['node_modules/ionic-framework/fonts/**/*.ttf'],
      dest: "www/build/fonts"
    },
    watch: {
      sass: ['www/app/**/*.scss'],
      html: ['www/app/**/*.html'],
      livereload: [
        'www/build/**/*.html',
        'www/build/**/*.js',
        'www/build/**/*.css'
      ]
    }
  },

  autoPrefixerOptions: {
    browsers: [
      'last 2 versions',
      'iOS >= 7',
      'Android >= 4',
      'Explorer >= 10',
      'ExplorerMobile >= 11'
    ],
    cascade: false
  },

  // hooks execute before or after all project-related Ionic commands
  // (so not for start, docs, but serve, run, etc.) and take in the arguments
  // passed to the command as a parameter
  //
  // The format is 'before' or 'after' + commandName (uppercased)
  // ex: beforeServe, afterRun, beforePrepare, etc.
  hooks: {
    beforeServe: function(argv) {
      //console.log('beforeServe');
    }
  }
};
