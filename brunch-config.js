// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.paths = {
  public: 'dist'
};

exports.plugins = {
  babel: {
    presets: ['env', 'preact'],
    plugins: ['transform-class-properties', 'transform-object-rest-spread'],
  },
  less: {
    modules: true
  }
};
