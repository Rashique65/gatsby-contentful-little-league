import React from "react"
import { graphql } from "gatsby"

const Team = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{data.team.teaminfo.name}</h1>
      <p>{data.team.teaminfo.sports}</p>
      <div>
        {data.team.coaches.map(coach => (
          <p>{coach}</p>
        ))}
      </div>
    </div>
  )
}

export default Team

export const pageQuery = graphql`
  query($slug: String!) {
    team: contentfulTeam(slug: { eq: $slug }) {
      slug
      teeball
      coed
      coaches
      numberOfPlayers
      teaminfo {
        name
        sports
        league
      }
    }
  }
`
