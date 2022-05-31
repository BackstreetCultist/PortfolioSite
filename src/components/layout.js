import React from 'react'
import { Helmet } from 'react-helmet'
import Nav from './nav.js'
import { useStaticQuery, graphql } from 'gatsby'
import { background, container, siteTitle, siteSubTitle, heading, body, text } from '../resources/styles/components/layout.module.scss'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    subtitle
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
                <h1 className={siteSubTitle}>{data.site.siteMetadata.subtitle}</h1>
                <Nav></Nav>
                <main>
                    <div className={body}>
                        <h1 className={heading}>{pageTitle}</h1>
                        <div className={text}>
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Layout
