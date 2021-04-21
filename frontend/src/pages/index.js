import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import ArticlesComponent from "../components/articles"
import "../assets/css/main.css"

const IndexPage = () => {
  const data = useStaticQuery(query)

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{data.strapiHomepage.hero.title}</h1>
          <ArticlesComponent articles={data.allStrapiArticle.edges} />
        </div>
      </div>
    </Layout>
  )
}

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
    allStrapiArticle(filter: { status: { eq: "published" } }) {
      edges {
        node {
          strapiId
          slug
          title
          category {
            name
          }
          image {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 800
                height: 500
                transformOptions: { fit: COVER }
              )
            }
          }
          author {
            name
            picture {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 30
                  height: 30
                  transformOptions: { fit: COVER }
                )
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
