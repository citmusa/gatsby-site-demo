import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"


const LISTING_QUERY = graphql`
query ListingQ {
  allMarkdownRemark(limit: 10, sort: {order: DESC, fields: [frontmatter___date]}) {
    edges {
      node {
        excerpt
        frontmatter {
          date
          title
          slug
        }
      }
    }
  }
}
`

const Listing = () => (
    <div>
        <h1>Hi people</h1>
        <p>Welcome to this new Gatsby site.</p>
        <p>We will be customizing this shortly. At the moment this page is living here: <a href="https://citmusa-gatsby01.netlify.com" target="_blank">https://citmusa-gatsby01.netlify.com</a></p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        </div>

        <h1>POST LISTING</h1>
        <StaticQuery
            query={LISTING_QUERY}
            render={({allMarkdownRemark})=>(
                allMarkdownRemark.edges.map(edge => (
                    <article key={edge.node.frontmatter.slug}>
                        <h3>{edge.node.frontmatter.title}</h3>
                        <p>{edge.node.excerpt}</p>
                        <Link to={`/posts${edge.node.frontmatter.slug}`}>Read more</Link>
                        <br/><br/>
                        <hr />
                    </article>
                ))
            )}
        />

        <h2>Some links</h2>
        <ul>
        <li><Link to="/page-2/">Go to page 2</Link></li>
        <li><Link to="/company/">Company Index</Link></li>
        <li><Link to="/company/about">Company About page</Link></li>
        </ul>
    </div>

)

export default Listing
