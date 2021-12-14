import gql from "graphql-tag";

const CITY_QUERY = gql`
  query Cities {
    cities  {
      id
      name
      slug
      description
      image {
        url
      }
      resources (limit : 6) {
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

export default CITY_QUERY;
