import React from 'react'
import Nav from './nav.js'
import { useStaticQuery, graphql } from 'gatsby'
import { container, heading, siteTitle} from '../resources/styles/components/layout.module.scss'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <Nav></Nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout
