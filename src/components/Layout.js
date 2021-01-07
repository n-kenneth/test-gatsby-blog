import React from "react"
import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Typography"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <main>
      <Typography />
      <GlobalStyles />
      <Header />
      {children}
    </main>
  )
}

export default Layout
