import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Items" } }
      sort: { fields: data___Name }
    ) {
      nodes {
        recordId
        data {
          Name
          Role
          Company {
            data {
              Name
              Logo {
                url
              }
            }
          }
        }
      }
    }
  }
`

export default ({ data }) => (
  <div>
    <h1>Our Resumes</h1>
    <ul>
      {data.allAirtable.nodes.map(node => (
        <li key={node.recordId}>
          {node.data.Name} was a {node.data.Role} at{" "}
          {node.data.Company[0].data.Name}
          <img
            style={{ width: "50px" }}
            src={node.data.Company[0].data.Logo[0].url}
            alt={node.data.Company[0].data.Name}
          />
        </li>
      ))}
    </ul>
  </div>
)
