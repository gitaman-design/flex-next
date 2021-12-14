import gql from "graphql-tag";

export const SINGLE_CAT_QUERY=gql`
query Categories ($url: String) {
    categories (where: {id: $url}) {
      id
      name
      slug
      description
      cities {
          ... on City {
              name
              slug
              description
              image {
                  url
              }
          }
      }
      resources {
          ... on Resource {
            id
            name
            slug
            seater
            minBooking
            srcImages
            hourPricing
            areas {
              area
            }
          }
      }
    }
  }
`;