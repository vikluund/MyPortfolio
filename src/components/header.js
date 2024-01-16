import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "../css/style.css"
import useNavigation from "../hooks/use-navigation"
import { Helmet } from "react-helmet"

const Header = () => {
  const navigation = useNavigation()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
      file(relativePath: { eq: "applerun.gif" }) {
        publicURL
      }
    }
  `)

  return (
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="author" content={data.site.siteMetadata.author} />
      </Helmet>
      <header className="custom-header">
        <div className="header-icon">
          <img src={data.file.publicURL} alt="header icon" />
        </div>
        {navigation.map(page => (
          <Link key={page.id} to={`${page.url}`} className="nav-item">
            {page.title}
          </Link>
        ))}
      </header>
    </>
  )
}

export default Header
