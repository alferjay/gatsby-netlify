import React from "react"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"

export default function Home({ data }) {
  return (
    <PrimaryLayout>
      {data.allMarkdownRemark.nodes.map((node, index) => (
        <Post
          key={index}
          image={node.frontmatter.image}
          title={node.frontmatter.title}
          excerpt={node.excerpt}
          readMore={node.fields.slug}
        />
      ))}
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          keywords
          image
        }
        excerpt
        html
        fields {
          slug
        }
      }
    }
  }
`
