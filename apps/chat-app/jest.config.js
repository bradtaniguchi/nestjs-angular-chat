module.exports = {
  name: 'chat-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/chat-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
