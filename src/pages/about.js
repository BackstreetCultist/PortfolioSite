import React from 'react'
import Layout from '../components/layout'

const description = <p>I am a fourth year Computer Science with Artificial Intelligence student at the University of Nottingham</p>

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me" children={description}>
    </Layout>
  )
}

export default AboutPage
