import {gql} from "@apollo/client"

export const CREATE_SERVICE = gql `
        mutation CreateService($title:String!, $description:String!) {
            createService(title: $title , description: $description){
            id
            title
            description
            }
        }
`;

export const CREATE_PROJECT = gql `
    mutation CreateProject($title:String! , $category:String!) {
        createProject(title:$title , category: $category){
            id
            title
            category    
        }
    }

`;

export const CREATE_LEAD = gql `
    mutation CreateLead($name:String!, $email:String!, $message:String!) {
        createLead(name: $name, email: $email, message: $message) {
            id
            status
            createdAt
        }
    }
`

export const UPDATE_LEAD_STATUS = gql `
    mutation UpdateLeadStatus($id: ID!, $status: LeadStatus!) {
        updateLeadStatus(id: $id, status: $status) {
            id
            status
        }
    }
`;