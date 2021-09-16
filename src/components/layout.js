import React from 'react'
import Nav from './nav.js'
import { useStaticQuery, graphql } from 'gatsby'
import '../resources/styles/layout.scss'

const Layout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return(
        <div id="container">
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header id="site-title">{data.site.siteMetadata.title}</header>
            <Nav></Nav>
            <main>
                <h1 id="heading">{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout
