import { Service } from "@/models/Service"; 
import { Project } from "@/models/Project";

export const resolvers = {
    Query: {
        services: async () => {
            return await Service.find();
        },
        
        projects: async () => {
            return await Project.find();
        },
    },

    Mutation: {
        createService: async (
            _: unknown, 
            args: {title:string, description:string}
        ) => {
            const service = new Service(args);
            return await service.save();
        },

        createProject: async (
            _:unknown,
            args: {title:string , category:string}
        ) => {
            const project = new Project(args);
            return await project.save();
        }
    }
};