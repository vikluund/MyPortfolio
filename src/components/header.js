import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "../css/style.css"
import useNavigation from "../hooks/use-navigation"
import { Helmet } from "react-helmet"

const Header = () => {
  // Custom hook to handle navigation logic
  const navigation = useNavigation()

  // GraphQL query to fetch data including site metadata, pages, and an image
  // Also using the filter method to filter out the 404 page
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
      allContentfulPage(
        filter: { template: { ne: "404" } }
        sort: { createdAt: ASC }
      ) {
        nodes {
          id
          url
          title
        }
      }
      file(relativePath: { eq: "applerun.gif" }) {
        publicURL
      }
    }
  `)

  const pages = data.allContentfulPage.nodes

  return (
    <>
      {/* Helmet for setting metadata in the head of the document */}
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="author" content={data.site.siteMetadata.author} />
      </Helmet>
      <header className="custom-header">
        <div className="header-icon">
          <img src={data.file.publicURL} alt="header icon" />
        </div>
        {/* Looping through pages and creating navigation links */}
        {pages.map(page => (
          <Link key={page.id} to={page.url} className="nav-item theNavButton">
            {page.title}
          </Link>
        ))}
      </header>
    </>
  )
}

export default Header
