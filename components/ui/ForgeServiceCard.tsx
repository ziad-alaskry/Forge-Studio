import {FC} from "react";
import { ForgeService } from "@/data/servicesData";

interface ForgeServiceCardProps {
    service: ForgeService;
}

const ForgeServiceCard: FC<ForgeServiceCardProps> = ({service}) => {
    return (
        <div className="
        bg-forgeMetal/40 backdrop-blur-xl
        border border-forgeGlow/20 rounded-2xl
        p-6 shadow-forgeGlow transition-all duration-300
        hover:scale-[1.03] hover:border-forgeBlue">
            <h3 className="text-xl font-semibold text-forgeBlue mb-2">
                {service.title}
            </h3>
            <p className="text-gray-300 text-sm">
                {service.description}
            </p>
        </div>
    )
}

export default ForgeServiceCard