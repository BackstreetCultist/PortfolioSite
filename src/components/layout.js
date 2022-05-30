import React from 'react'
import { Helmet } from 'react-helmet'
import Nav from './nav.js'
import { useStaticQuery, graphql } from 'gatsby'
import { background, container, heading, siteTitle} from '../resources/styles/components/layout.module.scss'

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
        <>
            <Helmet>
                <title>{pageTitle} | {data.site.siteMetadata.title}</title>
                <html className={background} />
                <body className={background} />
            </Helmet>
            <div className={container}>
                <header className={siteTitle}>{data.site.siteMetadata.title}</header>
                <Nav></Nav>
                <main>
                    <h1 className={heading}>{pageTitle}</h1>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
