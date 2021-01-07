import React from "react"
import "normalize.css"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"

const Home = () => {
  return (
    <Layout>
      <BlogList />
      <h1>The perfect weekend getaway</h1>
    </Layout>
  )
}

export default Home
