import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderStyles = styled.header`
  header {
    display: flex;
    justify-content: space-between;
  }
  h1 {
    min-width: 200px;
  }
  ul {
    display: flex;
    justify-content: space-around;
  }
`

const Header = () => {
  return (
    <HeaderStyles>
      <header>
        <h1>Bloggify</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </header>
    </HeaderStyles>
  )
}

export default Header
