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