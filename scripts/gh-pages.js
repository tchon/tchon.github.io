const ghPages = require('gh-pages');

ghPages.publish(
  'docs',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/tchon/tchon.github.io.git',
    user: {
      name: 'Tim Chon',
      email: 'timchon@sonic.net'
    },
    dotfiles: true
  },
  () => { console.log('Deploy complete.'); }
);
