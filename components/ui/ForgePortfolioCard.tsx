import {FC} from "react";
import { ForgeProject } from "@/data/protfolioData";

interface ForgePortfolioCardProps {
    project: ForgeProject; 
}

const ForgePortfolioCard: FC<ForgePortfolioCardProps> = ({project}) => {
    return (
        <div className=" bg-forgeMetal/30 border
        border-forgeGlow/10 rounded-2xl p-6 
        transition-all duration-300 hover:bg-forgeMetal/50
        hover:shadow-forgeGlow">
            <h3 className="text-lg font-semibold text-forgeBlue">
                {project.title}
            </h3>
            <p className="text-xs text-gray-400 mt-1">
                {project.category}
            </p>
        </div>
    )
}

export default ForgePortfolioCard;
