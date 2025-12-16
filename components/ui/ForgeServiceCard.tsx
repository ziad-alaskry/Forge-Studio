import {FC} from "react";
import { ForgeService } from "@/data/servicesData";

interface ForgeServiceCardProps {
    title: string;
    description:string;
    points:string[];
}

const ForgeServiceCard = ({title, description,points}:ForgeServiceCardProps)  => {
    return (
        <div className="border border-white/10 hover:border-white  rounded-2xl p-8 bg-black/40">
            <h3 className="text-xl font-semibold text-white mb-4">
                {title}
            </h3>
            <p className="text-white/70 mb-6">
                {description}
            </p>
            <ul className="space-y-2">
                {points.map((point, index)=> (
                    <li 
                    key={index}
                    className="text-sm text-white/60"
                    >
                        - {point}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ForgeServiceCard