import ForgeServiceCard from "../ForgeServiceCard";
import ForgeContainer from "../ForgeContainer";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

const services = [
  {
    title: "Admin Dashboards",
    description:
      "Secure dashboards to manage users, content, and business data.",
    points: [
      "Authentication & roles",
      "Real-time data management",
      "Scalable API-backed architecture",
    ],
  },
  {
    title: "Internal Tools",
    description:
      "Custom tools that streamline workflows and eliminate manual work.",
    points: [
      "Business-specific logic",
      "Automation-ready workflows",
      "Clean, maintainable codebase",
    ],
  },
  {
    title: "Web Platforms",
    description:
      "Production-ready platforms built to scale from day one.",
    points: [
      "API-first design",
      "Secure backend integration",
      "Performance-focused frontend",
    ],
  },
]
  },
];

const ForgeServices = () => {
  return (
    <section id="services" className="py-32 bg-black">
      {/* Lamp effect for section intro */}
      <LampContainer>
        <ForgeContainer>
          <motion.div
            initial={{ opacity: 0.5, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="mb-16 max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              What We Build
            </h2>
            <p className="text-white/70">
              Focused systems designed to solve operational problems.
            </p>
          </motion.div>
        </ForgeContainer>


        {/* Services grid (NO lamp here) */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ForgeServiceCard key={service.title} {...service} />
              ))}
            </div>
          </motion.div>
        </ForgeContainer>
      </LampContainer>
    </section>
  );
};

export default ForgeServices;
