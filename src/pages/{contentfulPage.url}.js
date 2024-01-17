import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import HomeTemplate from "../templates/HomeTemplate"
import PortfolioTemplate from "../templates/PortfolioTemplate"
import AboutTemplate from "../templates/AboutTemplate"
import DefaultTemplate from "../templates/DefaultTemplate"
import ContactTemplate from "../templates/ContactTemplate"
import NotFound from "../templates/NotFound"

const Page = props => {
  // Extracting data from GraphQL query result
  const { data } = props
  const { contentfulPage } = data

  // Function to determine and return the appropriate template based on the page's template type
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
      case "404":
        return <NotFound {...contentfulPage} />
      default:
        return <DefaultTemplate {...contentfulPage} />
    }
  }
  // Rendering the selected template within the page layout (See layout.js in components)
  return <Layout>{getTemplate(contentfulPage)}</Layout>
}

// GraphQL query to fetch data for a specific page based on its ID
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
