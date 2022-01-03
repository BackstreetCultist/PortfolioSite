import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const description = <p>Here you'll find write-ups of some of the many projects I've worked on</p>

const PortfolioPage = ({ data }) => {
    return (
        <Layout pageTitle="Portfolio Home" children={description}>
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/portfolio/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <h3>{node.frontmatter.description}</h3>
                        <p>Posted: {node.frontmatter.datePublished}</p>
                    </article>
                ))
            }
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
                }
                id
                slug
            }
        }
    }
`

export default PortfolioPage
