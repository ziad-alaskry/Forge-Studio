export const typeDefs = `#graphql

type Service {
  id: ID!
  title: String!
  description: String!
}

type Project {
  id: ID!
  title: String!
  category: String!
}

enum LeadStatus {
  NEW
  CONTACTED
  IN_PROGRESS
  CLOSED
}

type Lead {
  id: ID!
  name: String!
  email: String!
  message: String!
  bundle: String
  createdAt: String
  status: LeadStatus
}

type Query {
  services: [Service!]!
  projects: [Project!]!
  leads: [Lead!]!
}

type Mutation {
  createLead(
    name: String!
    email: String!
    message: String!
    bundle: String
  ): Lead!

  updateLeadStatus(
    id: ID!
    status: LeadStatus!
  ): Lead!

  createService(
    title: String!
    description: String!
  ): Service!

  createProject(
    title: String!
    category: String!
  ): Project!
}
`;
