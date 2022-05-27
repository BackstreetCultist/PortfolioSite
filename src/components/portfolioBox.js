import React from 'react'
import { Link } from 'gatsby'
import { portfolioBox } from '../resources/styles/components/portfolioBox.module.scss'

const PortfolioBox = ({node}) => {
    return (
        <section className={portfolioBox}>
            <article key={node.id}>
                <div>
                    <h2>
                        <Link to={`/portfolio/${node.slug}`}>
                            {node.frontmatter.title}
                        </Link>
                    </h2>
                    <h3>{node.frontmatter.description}</h3>
                </div>
            </article>
        </section>
    )
}

export default PortfolioBox
