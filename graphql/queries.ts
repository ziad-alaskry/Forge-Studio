import { gql } from "@apollo/client";

export const GET_SERVICES = gql`
       query GetServices {
          services {
            id
            title
            description
          }
        }`;

        export const GET_PROJECTS = gql`
            query GetProjects {
               projects {
                  id
                  title
                  category
               }
            }
        `;

export const GET_LEADS = gql`
  query GetLeads {
    leads {
      id
      name
      email
      message
      bundle
      status
      createdAt
    }
  }
`;