import {FC} from "react";
import { ForgeProject } from "@/data/protfolioData";

interface ForgePortfolioCardProps {
    title: string;
    description:string;
    features:string[];
}


const ForgePortfolioCard = ({title,description,features}:ForgePortfolioCardProps) => {
    return (
        <div className=" border border-white/10 hover:border-white rounded-2xl
        p-8 bg-black/40 mt-">
            <h3 className="text-xl font-semibold text-white mb-4">
                {title}
            </h3>
            <p className="text-white/70 mb-6">
                {description}
            </p>
            <ul className="space-y-2">
                {features.map((feature,index)=> (
                    <li 
                    key={index}
                    className="text-sm text-white/60"
                    >
                        - {feature}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ForgePortfolioCard;
