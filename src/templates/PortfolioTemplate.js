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
              gatsbyImage: gatsbyImage(width: 1200)
              gatsbyImageData
            }
            slug
          }
        }
      }
    }
  `)

  const portfolioItems = portfolioData.allContentfulPortfolio.edges

  // Function to get the first two sentences from a given description
  const getFirstTwoSentences = description => {
    // Split the description into sentences
    const sentences = description.split(/[.!?]/)
    // Take the first two sentences and combine them again
    return sentences.slice(0, 2).join(". ") + "."
  }

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
          {/* Rendering the custom content using Contentful rich text */}
          {content && content.raw && (
            <div className="custom-content">
              {documentToReactComponents(JSON.parse(content.raw))}
            </div>
          )}
          <img src={Arrow} alt="An arrow" className="arrow-image" />
        </div>
      </div>
      <div className="row custom-card-container">
        {/* Looping through portfolio items and creating card elements */}
        {portfolioItems.map(({ node }) => {
          return (
            <div className="col-md-4 mb-4" key={node.id}>
              <Link to={`/portfolio/${node.slug}`} className="theLinks">
                <div className="card h-100 custom-card">
                  {/* Using the <picture> element for responsive images */}
                  <picture>
                    {/* Generating <source> elements for different image resolutions */}
                    <source
                      srcSet={node.image.gatsbyImageData.images.sources.map(
                        source => source.srcSet
                      )}
                      sizes={node.image.gatsbyImageData.images.sources.map(
                        source =>
                          `(max-width: ${source.sizes.width}px) ${source.sizes.width}px`
                      )}
                      type={node.image.gatsbyImageData.images.sources[0].type}
                    />
                    {/* Displaying the fallback image for browsers that don't support <picture> */}
                    <img
                      src={node.image.gatsbyImageData.images.fallback.src}
                      alt={node.title}
                      className="card-img-top"
                      style={{
                        aspectRatio: node.image.gatsbyImage.aspectRatio,
                      }}
                    />
                  </picture>
                  {/* Displaying portfolio item details in the card body */}
                  <div className="card-body d-flex flex-column">
                    <h2 className="card-title">{node.title}</h2>
                    {/* Displaying the combined sentences from before*/}
                    <p className="card-text">
                      {" "}
                      {getFirstTwoSentences(node.description.description)}
                    </p>
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
