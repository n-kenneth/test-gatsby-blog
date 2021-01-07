import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export const query = graphql`
  query($postId: ID!) {
    blog {
      post(id: $postId) {
        title
        body
        createdAt
        updatedAt
        author {
          name
        }
        comments {
          text
          updatedAt
          author {
            name
          }
        }
      }
    }
  }
`

const Post = ({
  data: {
    blog: { post },
  },
}) => {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>Author: {post.author.name}</p>
      <p>{post.body}</p>
    </Layout>
  )
}

export default Post
