import React from 'react'
import { Link } from 'gatsby'
import { portfolioBox, navLinkItem, title } from '../resources/styles/components/portfolioBox.module.scss'

const PortfolioBox = ({node}) => {
    return (
        <section className={portfolioBox}>
            <article key={node.id}>
                <div>
                    <div className={title}>
                        <h2>
                            <Link to={`/portfolio/${node.slug}`} className={navLinkItem}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                    </div>
                    <img
                        id="heroimage"
                        alt={node.frontmatter.hero_image_alt}
                        src={node.frontmatter.hero_image}
                    />
                    <h3>{node.frontmatter.description}</h3>
                </div>
            </article>
        </section>
    )
}

export default PortfolioBox
