module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], //loading jest-dom
  testEnvironment: 'jsdom', // Sets JSDOM as the test environment
  testMatch: [
     "**/test/**/*.js",         // Looks for any files ending with `.js` in any subdirectory of `test`
    "**/?(*.)+(spec|test).js"  // Also include any standard naming conventions
  ],
  
  transform: {
        "^.+\\.(ts|js)x?$": "babel-jest"
    },
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
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