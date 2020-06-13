import React from "react"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"

export default function Home({ data }) {
  return (
    <PrimaryLayout>
      {data.allWordpressPost.nodes.map((node, index) => (
        <Post
          key={index}
          // image={
          //   node.featured_media.source_url ? node.featured_media.source_url : ""
          // }
          title={node.title}
          excerpt={node.excerpt}
          readMore={node.slug}
        />
      ))}
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allWordpressPost {
      nodes {
        slug
        title
        excerpt
        featured_media {
          source_url
        }
      }
    }
  }
`
