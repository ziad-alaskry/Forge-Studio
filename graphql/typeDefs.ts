export const typeDefs = `#graphql 
        type Service {
            id: ID! 
            title: String!
            description: String!
        }

        type Lead {
        id: ID!
        name: String!
        email: String!
        message: String!
        createdAt: String!
        status: String!
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

            createLead(
                name: String!
                email: String!
                message: String!
            ): Lead!

            createService(title:String! , description:String!): Service!
            createProject(title:String! , category:String!): Project!
        }

        `;