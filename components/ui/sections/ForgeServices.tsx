import ForgeServiceCard from "../ForgeServiceCard";
import { servicesData } from "@/data/servicesData";
import ForgeContainer from "../ForgeContainer";

const ForgeServices = () => {
    return (
        <section className="py-24">
            <ForgeContainer>
                <h2 className="text-3xl font-bold text-forgeBlue
                mb-12 text-center">
                    What We Forge
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {servicesData.map((service) => (
                        <ForgeServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </ForgeContainer>
        </section>
    )
}

export default ForgeServices;