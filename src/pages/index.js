import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const description = <p>Lorem ipsum etc</p>
const image = <StaticImage
  alt="A close-up photograph of myself"
  src='../resources/images/headshot.png' />
const content = <div>
  {description}
  {image}
</div>

const IndexPage = () => {
  return (
    <Layout pageTitle="Home" children={content}>
    </Layout>
  )
}

export default IndexPage
