const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const query = await graphql(`
    query {
      blog {
        posts {
          id
          slug
        }
      }
    }
  `)
  console.log(query.data.posts)

  const postTemplate = path.resolve("./src/templates/Post.js")
  query.data.blog.posts.forEach(post => {
    createPage({
      path: `/posts/${post.slug}`,
      component: postTemplate,
      context: {
        postId: post.id,
      },
    })
  })
}
