import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

//react-component
//alla componenter under /src/pages blir automatiskt sidor
//sidans namn = namnet på javascript-filen (dock - index.js = sajtens första sida)
const IndexPage = () => (
  <Layout>
    <div className="container text-align">
      <Link to="/portfolio">My Portfolio</Link>
    </div>
  </Layout>
)
//denna konstant sätter titeln på sidan
export const Head = () => <title>Home Page</title>

export default IndexPage
