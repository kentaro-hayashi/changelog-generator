'use strict';

const simpleGit = require('simple-git');

module.exports = class ChangelogGenerator {

  constructor(remotePath, currentPath) {
    this.remotePath = remotePath;
    this.localPath = currentPath;
    this.tagName = '';
    this.tagComment = '';
    this.tagNameFormat = 'v%x.%y.%z';
    this.git = simpleGit(this.localPath);
  }

  async prepare(target) {
    this.target = target;
    await this.git.clone(this.remotePath);
    await this.git.checkout(this.target);
  }
  generate() {
    
  }
  
  async tag() {

  }
  
};
