import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import PortfolioBox from '../../components/portfolioBox'
import { portfolioIndex } from '../../resources/styles/pages/portfolio/index.module.scss'

const description = <p>Here you'll find write-ups of some of the many projects I've worked on</p>

const PortfolioPage = ({ data }) => {
    return (
        <Layout pageTitle="Portfolio Home">
            {description}
            <section className={portfolioIndex}>
                <div>
                    {
                    data.allMdx.nodes.map(node => (
                            <PortfolioBox node={node} />
                    ))
                    }
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(filter: {fileAbsolutePath: {regex: "/portfolio/"}},
            sort: {fields: frontmatter___datePublished, order: DESC}) {
            nodes {
                frontmatter {
                    author
                    datePublished(formatString: "DD/MM/YYYY")
                    title
                    description
                    hero_image
                    hero_image_alt
                }
                id
                slug
            }
        }
    }
`

export default PortfolioPage
