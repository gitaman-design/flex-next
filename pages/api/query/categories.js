import gql from "graphql-tag";

const CATE_QUERY = gql`
  query Categories {
    categories  {
      id
      name
      slug
      description
      image {
        url
      }
    }
  }
`;

export default CATE_QUERY;
