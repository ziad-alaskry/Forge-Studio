//import ForgeParallaxGlow from "./ForgeParallaxGlow";
import ForgeOrb from "./ForgeOrb";
//import RevealText from "./RevealText";
import ForgeButton from "../ui/ForgeButton";
import ForgeContainer from "@/components/ui/ForgeContainer";

const ForgeHero = () => {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* subtle visual accent */}
            <ForgeOrb />
            <ForgeContainer>
                <div className="grid grid-cols1 lg:grid-cols-2 gap-16 items-center">
                    <h1 className="text-4xl md:text-5xl xl:text-6xl
                    font-semibold text-white leading-tight">
                        We build production-grade systems for modern businesses.
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