//import ForgeParallaxGlow from "./ForgeParallaxGlow";
import ForgeOrb from "./ForgeOrb";
import { EncryptedText } from "@/components/ui/encrypted-text"
//import RevealText from "./RevealText";
import ForgeButton from "../ui/ForgeButton";
import ForgeContainer from "@/components/ui/ForgeContainer";
import ForgeBackground from "../3d/ForgeBackground";

const ForgeHero = () => {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* subtle visual accent */}

            <ForgeBackground />
            <ForgeOrb />
            <ForgeContainer>
                <div className="grid grid-cols1 lg:grid-cols-2 gap-16 items-center">
                    <h1 className="text-3xl md:text-4xl xl:text-5xl
                    font-semibold text-white leading-tight">
                        <EncryptedText
                            text="We buid production-grade systems for modern businesses."
                            encryptedClassName="text-white/30"
                            revealedClassName="text-white"
                            revealDelayMs={35}
                        />
                    </h1>
                    <p className="text-lg text-white/70 max-w-xl ">
                        Admin dashboards, internal tools, and scalable web
                        platforms - designed, built, and shipped with engineering descipline.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <ForgeButton label="View Services" />
                        <ForgeButton variant="secondary" label="Contact Studio" />
                    </div>
                </div>
            </ForgeContainer>
        </section>
    )
}
export default ForgeHero;