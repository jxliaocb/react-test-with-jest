module.exports = {

    "transform": {
        "\\.(svg)$": "identity-obj-proxy",
        "^.+\\.jsx?$": "babel-jest"
    },

    reporters: [
      'default',
      ['jest-html-reporters', {
        publicPath: './html-report',
        filename: 'report.html',
        expand: true
      }]
    ]
  };