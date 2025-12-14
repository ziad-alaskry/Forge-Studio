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