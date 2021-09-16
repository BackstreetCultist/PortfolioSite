import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx' 
import Layout from '../../components/layout'

//data prop stores query result (see below)
const BlogPost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.hero_image)

    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.datePublished}</p>
            <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.hero_image_alt}
            />
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

//$id automatically added as prop by File System Route API
export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                datePublished(formatString: "DD/MM/YYYY")
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            body
        }
    }
`
//This query runs on page load, results passed to data prop

export default BlogPost
