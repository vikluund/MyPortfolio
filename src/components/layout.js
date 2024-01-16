import * as React from "react"
import "../css/style.css"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
