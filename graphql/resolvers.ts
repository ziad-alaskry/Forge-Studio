import { Service } from "@/models/Service"; 
import { Project } from "@/models/Project";
import { Lead } from "@/models/Lead";

interface CreateLeadArgs {
  name: string;
  email: string;
  message: string;
}


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
        
        async createLead(_parent: unknown, args:CreateLeadArgs) {
            const {name, email, message} = args;
            
            // basic validation
            if(!name || !email || !message) {
                throw new Error("All fields are required")
            }
            
            // Save to DB
            const lead = await Lead.create({
                name,
                email,
                message,
            });

            return lead;

        },

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