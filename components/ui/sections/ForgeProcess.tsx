import ForgeContainer from "../ForgeContainer";
import ForgeProcessBento from "../ForgeProcessBento";
import { LampContainer } from "../lamp";
import {motion} from "motion/react"
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

            {/* Bento Grid */}
            <ForgeProcessBento />
        </ForgeContainer>
        </motion.div>
      </LampContainer>
    </section>
  );
};

export default ForgeProcess;
