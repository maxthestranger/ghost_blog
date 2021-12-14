import GhostContentAPI from '@tryghost/content-api';

// API Instance
const api = new GhostContentAPI({
  url: 'https://demo.ghost.io',
  key: '22444f78447824223cefc48062',
  version: 'v3',
});

// get all posts
export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.log(err);
    });
}
