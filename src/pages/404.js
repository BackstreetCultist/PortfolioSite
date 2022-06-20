import React from 'react'
import Layout from '../components/layout'

const description = 
<div>
<p>
Unfortunately, this page could not be found. Click on the nav-bar above to move back to some pages that (hopefully) exist!
</p>
</div>

// markup
const NotFoundPage = () => {
  return (
    <Layout pageTitle="404 Not Found" children={description}>
    </Layout>
  )
}

export default NotFoundPage
