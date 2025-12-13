import ForgeContainer from "../ForgeContainer";
import ForgePhilosophyBlock from "../ForgePhilosophyBlock";
import { philosophyData } from "@/data/philosophyData";

const ForgePhilosophy = () => {
    return (
        <section className="py-32 relative">
            {/* Subtle Glow Accent */}
            <div className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-96 h-96 bg-forgeBlue/20 blur-[120px] -z-10">
            </div>
                <ForgeContainer>
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <h2 className="text-4xl font-bold text-forgeBlue mb-6">
                            Our Philosophy
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Forge Studio exists to to craft products that feel inevitable.
                        </p>
                    </div>
                    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                             {philosophyData.map((item) => (
                                <ForgePhilosophyBlock key={item.id} item={item} />
                                ))} 
                    </div>
                </ForgeContainer>
        </section>
    )
}

export default ForgePhilosophy;