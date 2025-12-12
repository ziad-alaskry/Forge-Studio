import ForgeParallaxGlow from "./ForgeParallaxGlow";
import ForgeOrb from "./ForgeOrb";
import RevealText from "./RevealText";
import ForgeButton from "../ui/ForgeButton";
import ForgeContainer from "../ui/ForgeContainer";

const ForgeHero = () => {
    return ( 
        <div className="relative overflow-hidden pt-32 pb-20">
            <ForgeParallaxGlow/>
            <ForgeContainer>
                {/* GRID: Text Left, Orb Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                    {/* TEXT */}
                    <div className="text-center md:text-left space-y-6">
                        <RevealText>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold
                            text-forgeBlue drop-shadow-md">
                                Crafting Experiences 
                            </h1>
                        </RevealText>
                        <RevealText delay={0.2}>
                            <p className="text-base sm:text-lg text-gray-300 max-w-md">
                                Forge Studio is a premium digital workshop bringing
                                Expert-level clarity,motion ,and craftsmanship to modern web applications.
                            </p>
                        </RevealText>
                        <RevealText delay={0.4}>
                            <ForgeButton label="Start a project"/>
                        </RevealText>
                    </div>
                    
                    {/* ORB */}
                    <div className="flex justify-center md:justify-end">
                        <ForgeOrb/>
                    </div>

                </div>
            </ForgeContainer>

        </div>
    )
}

export default ForgeHero;