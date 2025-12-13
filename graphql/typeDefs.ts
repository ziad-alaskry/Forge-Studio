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
            project: [Project!]!
            }
        `;