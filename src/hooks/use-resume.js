import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query Resume {
    contentJson {
      basics {
        name
        label
        picture {
          childImageSharp {
            fixed(width: 256, height: 256) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        email
        website
        summary
        profiles {
          network
          url
          username
        }
      }
    }
  }
`

export const useResume = () => {
  const { contentJson } = useStaticQuery(query)
  return contentJson
}
