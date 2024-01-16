import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const PortfolioPostTemplate = ({ data }) => {
  const post = data.contentfulPortfolio

  return (
    <Layout>
      <div className="container">
        <h1>{post.title}</h1>
        <GatsbyImage
          alt={post.title}
          image={post.image.gatsbyImage}
          className="card-img-top"
          style={{ width: "100%" }}
        />
        <p>{post.description.description}</p>
      </div>
    </Layout>
  )
}

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
