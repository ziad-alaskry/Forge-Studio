import ForgeContainer from "../ForgeContainer";

// const steps = [
//     {
//         title: "Understand",
//         description:
//             "We start by understanding your business goals, constraints, and technical requirements.",
//     },
//     {
//         title: "Design",
//         description:
//             "We design the system architecture and user experience before writing a single line of code.",
//     },
//     {
//         title: "Build",
//         description:
//             "We build the system using clean, scalable code and proven engineering practices.",
//     },
//     {
//         title: "Ship",
//         description:
//             "We test, deploy, and hand over a production-ready system with full clarity.",
//     },
// ];


import ForgeProcessBento from "../ForgeProcessBento";
import { LampContainer } from "../lamp";
import { motion } from "motion/react"
const ForgeProcess = () => {
    return (
        <section id="process" className="py-32">
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
                        {/* Bento Grid */}
                        <ForgeProcessBento />
                    </ForgeContainer>
                </motion.div>
            </LampContainer >
        </section >
    );
};

export default ForgeProcess;
