import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const HomeTemplate = ({ title, content, image }) => {
  return (
    <div className="HomeWrap">
      <div className="contentWrapper">
        <h1>{title}</h1>
        {content &&
          content.raw &&
          documentToReactComponents(JSON.parse(content.raw))}
        <Link to="/">
          <button className="theButton">Take me Home!</button>
        </Link>
      </div>
      {image && image.gatsbyImageData && (
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={title}
          className="heroImage"
        />
      )}
    </div>
  )
}

export default HomeTemplate
