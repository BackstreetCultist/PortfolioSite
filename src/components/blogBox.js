import React from 'react'
import { Link } from 'gatsby'

const BlogBox = ({node}) => {
    return (
        <article key={node.id}>
            <h2>
                <Link to={`/blog/${node.slug}`}>
                    {node.frontmatter.title}
                </Link>
            </h2>
            <p>Posted: {node.frontmatter.datePublished}</p>
            <p>{node.frontmatter.author}</p>
        </article>
    )
}

export default BlogBox
