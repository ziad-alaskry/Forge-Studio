export const typeDefs = `#graphql 
        type Service {
            id: ID! 
            title: String!
            description: String!
        }


        type Project {
            id:ID!
            title:String!
            category: String!
        }

        type Query {
            services: [Service!]!
            projects: [Project!]!
            }

        type Mutation {
            createService(title:String! , description:String!): Service!
            createProject(title:String! , category:String!): Project!
        }

        `;