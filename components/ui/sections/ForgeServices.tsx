import ForgeServiceCard from "../ForgeServiceCard";
import ForgeContainer from "../ForgeContainer";
import { GET_SERVICES } from "@/graphql/queries";
import { useQuery } from "@apollo/client/react";

interface Service {
    id: string;
    title: string;
    description: string;
}

interface ServicesData {
    services: Service[];
}

const ForgeServices = () => {
    const {data,loading,error} = useQuery<ServicesData>(GET_SERVICES)
    
    if(loading) {
        return (
        <section className="py-24 text-center text-gray-300">
                Loading services... 
        </section>)
    }

    if(error) {
        return (
            <section className="py-24 text-center text-red-400">
                Failed to load services
            </section>
        )
    }

    if (!data || data.services.length === 0) {
        return <p className="text-gray-400">No services yet</p>;
     }

// data.services.map((service:any) =>
    return (
        <section className="py-24">
            <ForgeContainer>
                <h2 className="text-3xl font-bold text-forgeBlue
                mb-12 text-center">
                    What We Forge
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {data.services.map((service: Service) => (
                        <ForgeServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </ForgeContainer>
        </section>
    )
}

export default ForgeServices;