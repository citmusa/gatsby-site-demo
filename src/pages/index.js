import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to this new Gatsby site.</p>
    <p>We will be customizing this shortly. At the moment this page is living here: [https://citmusa-gatsby01.netlify.com/]</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h2>Some links</h2>
    <ul>
      <li><Link to="/page-2/">Go to page 2</Link></li>
      <li><Link to="/company/">Company Index</Link></li>
      <li><Link to="/company/about">Company About page</Link></li>
    </ul>
  </Layout>
)

export default IndexPage
