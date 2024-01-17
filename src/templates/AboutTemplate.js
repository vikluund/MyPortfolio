import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

const AboutTemplate = ({ title, content, image }) => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="containerItem">
        <h1 className="itemTitle">{title}</h1>
        <div className="itemWrapper">
          {image && image.gatsbyImageData && (
            <GatsbyImage
              image={image.gatsbyImageData}
              alt={title}
              className="itemImage"
            />
          )}
          {content && content.raw && (
            <div className="itemText">
              {documentToReactComponents(JSON.parse(content.raw))}
            </div>
          )}
        </div>
        <Link to="/">
          <button className="theButton">Go Home</button>
        </Link>
      </div>
    </>
  )
}

export default AboutTemplate
