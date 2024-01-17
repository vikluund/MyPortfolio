import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/layout"

const PortfolioPostTemplate = ({ data }) => {
  const post = data.contentfulPortfolio

  return (
    <Layout>
      <div className="containerItem">
        <h1 className="itemTitle">{post.title}</h1>
        <div className="itemWrapper">
          <GatsbyImage
            alt={post.title}
            image={post.image.gatsbyImage}
            className="itemImage"
          />
          <p className="itemText">{post.description.description}</p>
        </div>
        <Link to="/portfolio">
          <button className="theButton">Back to all projects!</button>
        </Link>
      </div>
    </Layout>
  )
}

// GraphQL query to fetch data for a specific portfolio post based on its slug
export const query = graphql`
  query ($slug: String!) {
    contentfulPortfolio(slug: { eq: $slug }) {
      title
      description {
        description
      }
      image {
        gatsbyImage(width: 1920)
      }
    }
  }
`

export default PortfolioPostTemplate
