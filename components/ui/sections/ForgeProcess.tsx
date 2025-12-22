import ForgeContainer from "../ForgeContainer";

const steps = [
    {
        title: "Understand",
        description:
            "We start by understanding your business goals, constraints, and technical requirements.",
    },
    {
        title: "Design",
        description:
            "We design the system architecture and user experience before writing a single line of code.",
    },
    {
        title: "Build",
        description:
            "We build the system using clean, scalable code and proven engineering practices.",
    },
    {
        title: "Ship",
        description:
            "We test, deploy, and hand over a production-ready system with full clarity.",
    },
];


import ForgeProcessBento from "../ForgeProcessBento";
import { LampContainer } from "../lamp";
import { motion } from "motion/react"
const ForgeProcess = () => {
    return (
        <section id="process" className="py-32 bg-black">
            <LampContainer>
                <motion.div
                    initial={{ opacity: 0.5, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    className=""
                >
                    <ForgeContainer>
                        <div className="mb-16 max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                                How We Work
                            </h2>
                            <p className="text-white/70">
                                Structured process designed to eliminate risk and deliver results.
                            </p>
                        </div>

                        <div className="space-y-12 max-w-3xl">
                            {steps.map((step, index) => (
                                <div key={step.title} className="flex gap-6">

                                    {/* 1. Fixed-width Number Column */}
                                    <div className="text-forgeBlue font-semibold text-lg flex-shrink-0">
                                        {index + 1}.
                                    </div>

                                    {/* 2. Content Column: Use flex-1 to take up all remaining width */}
                                    <div className="flex-1 min-w-0"> {/* min-w-0 ensures content can shrink */}

                                        {/* Title (The only remaining inline element) */}
                                        <h3 className="text-xl font-semibold text-white mb-2">
                                            {step.title}
                                        </h3>

                                        {/* Description (Will now take the full width of the flex-1 parent) */}
                                        <p className="text-white/70">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Bento Grid */}
                        <ForgeProcessBento />
                    </ForgeContainer>
                </motion.div>
            </LampContainer >
        </section >
    );
};

export default ForgeProcess;
