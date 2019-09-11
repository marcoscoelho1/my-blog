import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from '../Avatar'

const Profile = () => {
  const {
    site: {
      siteMetadata: { description, position, title },
    },
  } = useStaticQuery(graphql`
    query MyStieMetadata {
      site {
        siteMetadata {
          author
          description
          position
          title
        }
      }
    }
  `)

  return (
    <div className="Profile-wrapper">
      <Avatar />
      <h1>{title}</h1>
      <h2>{position}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Profile
