import ForgePortfolioCard from "../ForgePortfolioCard";
import ForgeContainer from "../ForgeContainer";
import { useQuery } from "@apollo/client/react";
import { GET_PROJECTS } from "@/graphql/queries";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";


const systems = [
  {
    title: "SaaS Admin Panel",
    description:
      "A secure administrative system for managing users, data, and internal operations.",
    features: [
      "OAuth authentication",
      "Role-based access control",
      "GraphQL-powered API",
      "MongoDB data models",
    ],
  },
  {
    title: "Internal Service Manager",
    description:
      "An internal tool designed to manage services, workflows, and operational data.",
    features: [
      "Protected admin access",
      "CRUD workflows",
      "Scalable backend logic",
      "Clean operational UI",
    ],
  },
  {
    title: "Content & Portfolio Platform",
    description:
      "A system for managing content and public-facing pages from a single admin interface.",
    features: [
      "Admin-managed content",
      "API-driven frontend",
      "Secure mutations",
      "Performance-optimized UI",
    ],
  },
];
const ForgePortfolio = () => {

    return (
        <section 
        id="scope"
        className="py-32 bg-black">
          <LampContainer>
            <ForgeContainer>
              <motion.div
            initial={{ opacity: 0.5, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className=""
          >
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                        Systems We Deliver
                    </h2>
                    <p className="text-white/70">
                        Production-ready systems built using modern, scalable architecture.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {systems.map((system) => (
                        <ForgePortfolioCard
                        key={system.title}
                        {...system}
                        />
                    ))}
                </div>
              </motion.div>
            </ForgeContainer>
          </LampContainer>
        </section>
    )
}

export default ForgePortfolio; 