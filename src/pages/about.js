import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="om" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>
            Ørn forlag brer sine vide vinger over sentrale deler av norsk natur,
            og bærer kunnskap ut til folket gjennom fysiske såvel som digitale
            medier.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Vi liker norsk natur og kultur</figcaption>
          </figure>
          <h3 id="dynamic-styles">Ørn Forlag</h3>
          <p>
            Bjørn Olav Tveit, forlagssjef, tel. +47 909 60 404,
            bjorn[@]ornforlag.no Elisabeth Anderseen, redaktør, tel. +47 905 17
            819, elisabeth.andersen[@]ornforlag.no Martin Andersen, front-end
            dev, tel. +47 993 47 544, webmaster[@]ornforlag.no Torgunn Andersen,
            logistikk, tel. +47 975 96 088, torgunn.andersen[@]ornforlag.no
            Heidi Tveit, regnskap, tel. +47 91 18 90 16, regnskap[@]ornforlag.no
          </p>
          <p>Ørn forlag Veståsen 4 1362 Hosle Norway</p>
          <p>Organisasjonsnr.: 994304399 MVA Kontonr.: 9235.27.10220</p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
