import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbyImage } from "gatsby-plugin-image"
import ContactForm from "../components/ContactForm"

const ContactTemplate = ({ title, content, image }) => {
  return (
    <div className="contact-template">
      <div className="contact-header">
        <h1>{title}</h1>
      </div>
      <div className="contact-content">
        {content &&
          content.raw &&
          documentToReactComponents(JSON.parse(content.raw))}
      </div>
      <div className="contact-form">
        <ContactForm />
      </div>
      <div className="contact-image">
        {image && image.gatsbyImageData && (
          <GatsbyImage image={image.gatsbyImageData} alt={title} />
        )}
      </div>
    </div>
  )
}

export default ContactTemplate
