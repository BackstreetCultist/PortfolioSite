import React from 'react'
import Layout from '../components/layout'
import '../resources/styles/pages/index.scss'

const description = <p>Lorem ipsum etc</p>
const image = <img
  id="welcomeimage"
  alt="A close-up photograph of myself"
  src='https://s3.eu-west-2.amazonaws.com/charliewilkins.tech/images/headshot.png' />
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
