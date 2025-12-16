import ForgeContainer from "../ForgeContainer";
import ForgeButton from "../ForgeButton";
import ForgeContactModal from "@/components/ui/ForgeContactModal";
import { useContactModal } from "@/hooks/useContactModal";


const ForgeCTA = () => {

    const contactModal = useContactModal();

     return (
        <section className="py-32 bg-forgeDark">
            <ForgeContainer>
                <div className="grid grid-cols-1 md:grid-cols-2
                gap-16 items-center">
                    {/* Left - Value */}
                    <div>
                        <h2 className="tet-3xl md:text-4xl
                        font-semibold text-white mb-6">
                            Why Forge Studio
                        </h2>
                        <p className="text-white/70 text-lg max-w-md">
                            We are focused engineering studio built for clarity,
                            speed and long-term thinking.
                        </p>
                    </div>

                    {/* Right -- Reason + CTA */}
                    <div className="space-y-10">
                        <div>
                            <h3 className="text-white font-semibold mb-2">
                                Engineering-first approach
                            </h3>
                            <p className="text-white/70">
                                We build systems that are structured, maintainable, and ready to grow.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-2">
                                Clear communication
                            </h3>
                            <p className="text-white/70">
                            You always know what is being built, why it matters, and what comes next.</p>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-2">
                                Quality over volume 
                            </h3>
                            <p className="text-white/70">
                                we take on fewer projects to deliver better results.
                            </p>
                        </div>

                        <div className="pt-4">
                            <ForgeButton
                            label="Let's Talk"
                            onClick={contactModal.open}
                            //href="/contact"
                            />
                            <ForgeContactModal 
                            isOpen={contactModal.isOpen}
                            onClose={contactModal.close} 
                            />
                            <p className="text-white/50 text-sm mt-3">
                            No commitments. Just clarity
                            </p>
                        </div>
                    </div>
                </div>
            </ForgeContainer>
        </section>
     )
}

export default ForgeCTA;