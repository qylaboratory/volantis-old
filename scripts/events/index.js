/* global hexo */

'use strict';

hexo.on('generateBefore', () => {
  // Merge config.
  require('./lib/config')(hexo);
  require('./lib/utils')(hexo);
  require('./lib/renderStylus')(hexo);
});
