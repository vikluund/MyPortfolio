import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbyImage } from "gatsby-plugin-image"

const AboutTemplate = ({ title, content, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      {content &&
        content.raw &&
        documentToReactComponents(JSON.parse(content.raw))}
      {image && image.gatsbyImageData && (
        <GatsbyImage image={image.gatsbyImageData} alt={title} />
      )}
    </div>
  )
}

export default AboutTemplate
