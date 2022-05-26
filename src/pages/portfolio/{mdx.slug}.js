import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import NotFoundPage from '../404'
import * as styles from '../../resources/styles/pages/portfolio/{mdx.slug}.module.scss'

//data prop stores query result (see below)
const PortfolioPost = ({ data }) => {
    if (data.mdx == null){
        return(
            <NotFoundPage></NotFoundPage>
        )
    }
    else {
        const image = <img
            id="heroimage"
            alt={data.mdx.frontmatter.hero_image_alt}
            src={data.mdx.frontmatter.hero_image} />
    
        return (
            <Layout pageTitle={data.mdx.frontmatter.title}>
                <section className={styles.container}>
                    <p>{data.mdx.frontmatter.datePublished}</p>
                    {image}
                    <MDXRenderer>
                        {data.mdx.body}
                    </MDXRenderer>
                </section>
            </Layout>
        )

    }
}

//$id automatically added as prop by File System Route API
//mdx is a node-level check rather than allMdx which is a layer above
export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}, fileAbsolutePath: {regex: "/portfolio/"}) {
            frontmatter {
                title
                datePublished(formatString: "DD/MM/YYYY")
                hero_image_alt
                hero_image
            }
            body
        }
    }
`
//This query runs on page load, results passed to data prop

export default PortfolioPost
