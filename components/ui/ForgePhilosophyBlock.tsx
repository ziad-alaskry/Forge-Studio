import {FC} from "react";
import { ForgePhilosophy  } from "@/data/philosophyData";

interface ForgePhilosophyBlockProps {
    item: ForgePhilosophy;
}

const ForgePhilosophyBlock: FC<ForgePhilosophyBlockProps> = ({item}) => {
    return (
        <div className="bg-forgeMetal/30 border
        border-forgeGlow/10 rounded-2xl p-8
        backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-forgeBlue mb-4">
                {item.title}
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm">
                {item.text}
            </p>
        </div>
    )
}

export default ForgePhilosophyBlock;