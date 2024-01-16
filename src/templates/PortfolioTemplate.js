import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbyImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import Arrow from "../images/arrow.png"

const PortfolioTemplate = ({ title, content, image }) => {
  const portfolioData = useStaticQuery(graphql`
    query {
      allContentfulPortfolio {
        edges {
          node {
            title
            description {
              description
            }
            image {
              gatsbyImage(width: 1200)
            }
            slug
          }
        }
      }
    }
  `)
  const portfolioItems = portfolioData.allContentfulPortfolio.edges

  return (
    <div className="container text-center">
      <div className="top-content">
        <h1>{title}</h1>
        <div className="heroPortfolio">
          {image && image.gatsbyImageData && (
            <GatsbyImage
              image={image.gatsbyImageData}
              alt={title}
              className="portfolioImage"
            />
          )}
        </div>
        <div className="contentImage">
          {content && content.raw && (
            <div className="custom-content">
              {documentToReactComponents(JSON.parse(content.raw))}
            </div>
          )}
          <img src={Arrow} alt="An arrow" className="arrow-image" />
        </div>
      </div>
      <div className="row custom-card-container">
        {portfolioItems.map(({ node }) => {
          return (
            <div className="col-md-4 mb-4" key={node.id}>
              <Link to={`/portfolio/${node.slug}`} className="theLinks">
                <div className="card h-100 custom-card">
                  <GatsbyImage
                    alt={node.title}
                    image={node.image.gatsbyImage}
                    className="card-img-top"
                    style={{ height: "200px" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h2 className="card-title">{node.title}</h2>
                    <p className="card-text">{node.description.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default PortfolioTemplate
