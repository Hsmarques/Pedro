require('isomorphic-fetch')

const url = `https://www.instagram.com/graphql/query/?query_hash=7c8a1055f69ff97dc201e752cf6f0093&variables=%7B%22id%22%3A%221968560096%22%2C%22first%22%3A8%2C%22after%22%3A%22QVFDeENNUV9ONDNTNUszRjNzWjlDc2s4NWJnOWROVHRJeEZuVTd3RzhnLVdpXzVzbWxKZ0J5aVN1RnJEUnhOMlZ0NHVCSnA0V24wV01XenBVR05fS1pwOQ%3D%3D%22%7D`

const cache = {
  lastFetch: 0,
  posts: [],
}

async function getPosts() {
  const timeSinceLastFetch = Date.now() - cache.lastFetch
  if (timeSinceLastFetch <= 1800000) {
    return cache.posts
  }

  const data = await fetch(url).then((res) => res.json())
  const posts = slimUpPosts(data)
  cache.lastFetch = Date.now()
  cache.posts = posts
  return posts
}

function slimUpPosts(response) {
  return response.data.user.edge_owner_to_timeline_media.edges.map((edge) => ({
    thumbnail: edge.node.thumbnail_src,
    url: `https://instagram.com/p/${edge.node.shortcode}`,
    caption: edge.node.edge_media_to_caption.edges[0].node.text,
    id: edge.node.id,
  }))
}

exports.handler = async function (event, context, callback) {
  const posts = await getPosts()
  callback(null, {
    // return null to show no errors
    statusCode: 200, // http status code
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(posts),
  })
}
