import { Service } from "@/models/Service"; 
import { Project } from "@/models/Project";
import { Lead } from "@/models/Lead";
import { mailer } from "@/lib/mailer"; 

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

            //Email to Client
            await mailer.sendMail({
                from:`"Forge Studio" <${process.env.EMAIL_USER}>`,
                to: email,
                subject: "We received your message 🚀",
                html: `
                    <h2>Hi ${name},</h2>
                    <p>Thanks for reaching out to Forge Studio.</p>
                    <p>We’ve received your message and will get back to you shortly.</p>
                    <br/>
                    <p>— Forge Studio Team</p>
                `,
            });

            //Email To ME (Admin)

            await mailer.sendMail({
                from:`"Forge Studio" <${process.env.EMAIL_USER}>`,
                to: process.env.ADMIN_EMAIL,
                subject:"New Forge Studio Lead",
                html: `
                    <h3>New Contact Submission</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                    `,
            })

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