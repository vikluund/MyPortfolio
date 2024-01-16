import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Sticky from "../images/stickynote.png"

//i dev mode overridas denna sida av en inbyggd 404-sida
const NotFoundPage = () => (
  <Layout>
    <div className="not-found">
      <div className="stickyWrapper">
        <p className="stickyText">404</p>
        <img src={Sticky} alt="Sticky Note" className="stickyNote" />
      </div>
      <h1 className="404Title">Page Not Found!</h1>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <title>Portfolio Page</title>

export default NotFoundPage
