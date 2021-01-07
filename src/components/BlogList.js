import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export const query = graphql`
  query {
    blog {
      posts {
        id
        title
        body
        author {
          id
          name
        }
        createdAt
      }
    }
  }
`

const BlogList = () => {
  const { data } = useStaticQuery(query)
  console.log(data)
  return <h1>Blog List</h1>
}

export default BlogList
