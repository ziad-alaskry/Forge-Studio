import ForgeButton from "../ForgeButton";
import {motion} from "motion/react"

// interface forzen for future use: {Admen, Leads, CRM, PAyments - later -}
interface Bundle {
    id: string;
    name: string;
    price: string;
    description: string;
    features: string[];
    cta: string; 
    highlighted?: boolean;
}

interface PricingSectionProps {
    onSelectBundle: (bundleId: string) => void;
}

// static data feed 
const bundles: Bundle[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$199",
    description: "Perfect for validating an idea or MVP.",
    features: [
      "Landing page or small website",
      "Responsive design",
      "Basic SEO setup",
      "Email support",
    ],
    cta: "Start Project",
  },
  {
    id: "growth",
    name: "Growth",
    price: "$499",
    description: "For startups ready to scale.",
    features: [
      "Multi-page website",
      "Custom UI components",
      "Performance optimization",
      "Priority support",
    ],
    cta: "Start Project",
    highlighted: true,
  },
  {
    id: "forge-plus",
    name: "Forge+",
    price: "Custom",
    description: "Tailored solutions for ambitious teams.",
    features: [
      "Custom web application",
      "Advanced integrations",
      "Ongoing support",
      "Dedicated consultation",
    ],
    cta: "Contact Us",
  },
];

const PricingSection = ({onSelectBundle}: PricingSectionProps) => {
    return (
        <section 
        id="pricing"
        className="py-32 bg-black relativ">
            <motion.div
            initial={{ opacity: 0.5, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className=""
          >  
            {/** Section header */}
            <div className="max-w-4xl mx-auto text-center mb-20 px-6">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Bundle pricing
                </h2>
                <p className="text-white/60">
                    Choose a package that fits your needs. No hidden fees.
                </p>
            </div>

            {/** bundles grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3
            gap-6 px-6">
                {bundles.map((bundle) => (
                    <div key={bundle.id}
                    className={`
                        relative rounded-2xl border 
                        ${bundle.highlighted ? "border-forgeBlue shadow-forgeGlow scale-[1.02]"
                             : "border-forgeGlow/20"
                        } bg-forgeMetal/60 backdrop-blur p-8 transition-all
                        `} >
                            {/** bundle header */}
                            <h3 className="text-2xl font-semibold text-white mb-2">
                                {bundle.name}
                            </h3>

                            <p className="text-forgeBlue text-3xl font-bold mb-4">
                                {bundle.price}
                            </p>

                            <p className="text-white/60 mb-6">
                                {bundle.description}
                            </p>

                            {/** Features */}
                            <ul className="space-y-3 mb-10">
                                {bundle.features.map((feature, index)=> (
                                    <li key={index} 
                                    className="text-white/80 flex gap-2">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            
                            {/** CTA */}
                            <div className="w-full">
                                <ForgeButton 
                                label={bundle.cta}
                                variant={bundle.highlighted ? "primary" : "secondary"}
                                onClick={() => {
                                        onSelectBundle(bundle.id)
                                }} />
                            </div>

                        </div>
                ))}
            </div>
                </motion.div>
        </section>
    )
}

export default PricingSection;