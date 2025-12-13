import {ApolloServer} from "@apollo/server"
import { startServerAndCreateNextHandler } from "@as-integrations/next"
import { typeDefs} from "../../graphql/typeDefs"
import { resolvers } from "../../graphql/resolvers"
import { connectDB } from "@/lib/db"

const server = new ApolloServer({
    typeDefs,
    resolvers
})

export default startServerAndCreateNextHandler(server , {
    context: async () => {
        await connectDB();
        return {};
    }
})