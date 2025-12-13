import { Service } from "@/models/Service"; 
import { Project } from "@/models/Project";

export const resolvers = {
    Query: {
        services: async () => {
            return await Service.find();
        },
        
        project: async () => {
            return await Project.find();
        },
    },
};