import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import BlogBox from '../../components/blogBox'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="Blog Index">
            {
                data.allMdx.nodes.map(node => (
                    <BlogBox node={node} />
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(filter: {fileAbsolutePath: {regex: "/blog/"}},
            sort: {fields: frontmatter___datePublished, order: DESC}) {
            nodes {
                frontmatter {
                    author
                    datePublished(formatString: "DD/MM/YYYY")
                    title
                    description
                }
                id
                slug
            }
        }
    }
`

export default BlogPage
