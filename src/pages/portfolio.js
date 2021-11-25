import React from 'react'
import Layout from '../components/layout'

const description = <p>Here you'll find write-ups of some of the many projects I've worked on</p>

const PortfolioPage = ({ data }) => {
    return (
        <Layout pageTitle="Portfolio Home" children={description}>
        </Layout>
    )
}

export default PortfolioPage
