import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import HomeTemplate from "../templates/HomeTemplate"
import PortfolioTemplate from "../templates/PortfolioTemplate"
import AboutTemplate from "../templates/AboutTemplate"
import DefaultTemplate from "../templates/DefaultTemplate"
import ContactTemplate from "../templates/ContactTemplate"

const Page = props => {
  const { data } = props
  const { contentfulPage } = data

  const getTemplate = contentfulPage => {
    switch (contentfulPage.template) {
      case "home":
        return <HomeTemplate {...contentfulPage} />
      case "portfolio":
        return <PortfolioTemplate {...contentfulPage} />
      case "about":
        return <AboutTemplate {...contentfulPage} />
      case "contact":
        return <ContactTemplate {...contentfulPage} />
      default:
        return <DefaultTemplate {...contentfulPage} />
    }
  }
  return <Layout>{getTemplate(contentfulPage)}</Layout>
}

export const query = graphql`
  query ($id: String) {
    contentfulPage(id: { eq: $id }) {
      id
      url
      title
      content {
        raw
      }
      image {
        gatsbyImageData
      }
      template
    }
  }
`

export default Page
