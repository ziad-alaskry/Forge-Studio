import ForgeServiceCard from "../ForgeServiceCard";
import ForgeContainer from "../ForgeContainer";
import { GET_SERVICES } from "@/graphql/queries";
import { useQuery } from "@apollo/client/react";


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

const ForgeServices = () => {

  return (
    <section
      id="services"
      className="py-32">
      <ForgeContainer>
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold
                    text-white mb-4">
            What We Build
          </h2>
          <p className="text-white/70">
            Focused systems designed to solve operational problems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 
                lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ForgeServiceCard
              key={service.title}
              {...service} />
          ))}
        </div>
      </ForgeContainer>
    </section>
  )
}

export default ForgeServices;