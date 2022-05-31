import React from 'react'
import Layout from '../components/layout'
import { index } from '../resources/styles/pages/index.module.scss'

const description = 
  <div>
      Welcome to my site! My name is Charlie Wilkins, I am a software developer and quality engineer currently based in the United Kingdom. This website is a space where I share my thoughts on software engineering, technology and the wider industry.
    <p>
      On this site, you'll find my blog, as well as a portfolio section containing casual write-ups of some of my projects. On the About Me page you'll find more details about, well, me, as well as my CV and contact details.
    </p>
  </div>
const image = <img
  alt="A close-up photograph of myself"
  src='https://s3.eu-west-2.amazonaws.com/charliewilkins.tech/images/headshot.png' />
const content = 
  <div className={index}>
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
