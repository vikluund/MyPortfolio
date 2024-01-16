import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const useNavigation = () => {
  const { allContentfulPage } = useStaticQuery(graphql`
    query {
      allContentfulPage(sort: { createdAt: ASC }) {
        nodes {
          url
          title
        }
      }
    }
  `)
  return allContentfulPage.nodes
}

export default useNavigation
