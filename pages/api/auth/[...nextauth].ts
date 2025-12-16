import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import { connectDB } from "@/lib/db";
import User from "@/models/User";


export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],
    session: {
        strategy: "jwt"
    },
    callbacks:
    /* 
    - Runs ON LOGIN .
    - Perfect place to sync OAuth => DB.
    */
    {

        async signIn({user}) {
            await connectDB(); 
            const existingUser = await User.findOne({email: user.email});
            if(!existingUser) {
                await User.create({
                    name: user.name,
                    email: user.email,
                    image: user.image,
                })
            }
            return true;
        },


        async session({session, token}) {
            if (token.sub && session.user ) {
                session.user.id = token.sub;
            }
            return session;
        },
    },
    pages: {
  signIn: "/auth/signin",
}
});