import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

function SEO({ title, description, keywords, image }) {
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            defaultDescription,
            defaultImage,
            url,
            defaultKeywords,
          },
        },
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: `${image ? image : url + defaultImage}`,
          keywords: keywords || defaultKeywords,
        }

        return (
          <Helmet>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="keyword" content={seo.keywords} />
            <meta name="image" content={seo.image} />
            <meta name="robots" content="index,follow" />
          </Helmet>
        )
      }}
    />
  )
}

export default SEO

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultKeywords: keywords
        image
        url
      }
    }
  }
`
