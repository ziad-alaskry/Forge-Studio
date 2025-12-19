import { Service } from "@/models/Service";
import { Project } from "@/models/Project";
import { Lead } from "@/models/Lead";
import { mailer } from "@/lib/mailer";
import { connectDB } from "@/lib/db";
import { ADMIN_EMAIL } from "@/lib/admin";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";


interface CreateLeadArgs {
  name: string;
  email: string;
  message: string;
  bundle?: string;
}

const requireAdmin = async () => {
    const session = await getServerSession(authOptions);
    if(!session || session.user?.email !== ADMIN_EMAIL){
        throw new Error("Not Authorized")
    }
}


export const resolvers = {
  Query: {
    services: async () => {
      await connectDB();
      return Service.find();
    },

    projects: async () => {
      await connectDB();
      return Project.find();
    },

    leads: async () => {
      await connectDB();
      return Lead.find().sort({ createdAt: -1 });
    },
  },

  Mutation: {
    createLead: async (_: unknown, args: CreateLeadArgs) => {
      await connectDB();

      const { name, email, message, bundle } = args;

      if (!name || !email || !message) {
        throw new Error("All fields are required");
      }

      const lead = await Lead.create({
        name,
        email,
        message,
        bundle,
      });

      await mailer.sendMail({
        from: `"Forge Studio" <${process.env.EMAIL_USER}>`,
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

      await mailer.sendMail({
        from: `"Forge Studio" <${process.env.EMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: "New Forge Studio Lead",
        html: `
          <h3>New Contact Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      return lead;
    },

    updateLeadStatus: async (
      _: unknown,
      args: { id: string; status: string }
    ) => {
      await requireAdmin();
      await connectDB();

      const lead = await Lead.findByIdAndUpdate(
        args.id,
        { status: args.status },
        { new: true }
      );

      if (!lead) {
        throw new Error("Lead not found");
      }

      return lead;
    },

    createService: async (
      _: unknown,
      args: { title: string; description: string }
    ) => {
      await connectDB();
      return Service.create(args);
    },

    createProject: async (
      _: unknown,
      args: { title: string; category: string }
    ) => {
      await connectDB();
      return Project.create(args);
    },
  },

Lead: {
  id: (parent: any) => parent._id.toString(),
  status: (parent: any) =>
    typeof parent.status === "string"
      ? parent.status.toUpperCase()
      : parent.status,
},
};
