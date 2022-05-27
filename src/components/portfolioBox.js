import React from 'react'
import { Link } from 'gatsby'
import { portfolioBox, navLinkItem } from '../resources/styles/components/portfolioBox.module.scss'

const PortfolioBox = ({node}) => {
    return (
        <section className={portfolioBox}>
            <article key={node.id}>
                <h2>
                    <Link to={`/portfolio/${node.slug}`} className={navLinkItem}>
                        {node.frontmatter.title}
                    </Link>
                </h2>
                <Link to={`/portfolio/${node.slug}`} className={navLinkItem}>
                    <img
                        id="heroimage"
                        alt={node.frontmatter.hero_image_alt}
                        src={node.frontmatter.hero_image}
                    />
                </Link>
                <h3>{node.frontmatter.description}</h3>
            </article>
        </section>
    )
}

export default PortfolioBox
