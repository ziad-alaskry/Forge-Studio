//import ForgeParallaxGlow from "./ForgeParallaxGlow";
import ForgeOrb from "./ForgeOrb";
import { EncryptedText } from "@/components/ui/encrypted-text"
//import RevealText from "./RevealText";
import ForgeButton from "../ui/ForgeButton";
import ForgeContainer from "@/components/ui/ForgeContainer";
import ForgeHeroBackground from "../forge/ForgeHeroBackground";
import { useContactModal } from "@/hooks/useContactModal";
import ForgeContactModal from "@/components/ui/ForgeContactModal";

interface ForgeCTAProps{
    onOpenContact: (bundleId?: string) => void;
}


const ForgeHero = ({onOpenContact}:ForgeCTAProps) => {

    const contactModal = useContactModal();
    return (    
        <section className="relative py-28 overflow-hidden bg-black">
            {/* subtle visual accent */}
            
            <ForgeOrb/>
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
                   
                    <div className="flex gap-4 pt-4 absolute bottom-10">
                        <ForgeButton label="View Services"
                        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                         />
                        <ForgeButton variant="secondary" label="Contact Studio"
                         onClick={() => onOpenContact()}
                        />
                    </div>
                </div>
            </ForgeContainer>
        </section>
    )
}
export default ForgeHero;