import React from 'react'
import { Link } from 'gatsby'
import { blogBox, navLinkItem } from '../resources/styles/components/blogBox.module.scss'

const BlogBox = ({node}) => {
    return (
        <div className={blogBox}>
            <article key={node.id}>
                <h2>
                    <Link to={`/blog/${node.slug}`} className={navLinkItem}>
                        {node.frontmatter.title}
                    </Link>
                </h2>
                <h3>
                    {node.frontmatter.description}
                </h3>
                <div>
                    <p>Posted: {node.frontmatter.datePublished}</p>
                    <p style={{textAlign: "right"}}>{node.frontmatter.author}</p>
                </div>
            </article>
        </div>
    )
}

export default BlogBox
