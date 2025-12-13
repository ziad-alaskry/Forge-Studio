import ForgePortfolioCard from "../ForgePortfolioCard";
import { portfolioData } from "@/data/protfolioData";
import ForgeContainer from "../ForgeContainer";

const ForgePortfolio = () => {
    return (
        <section className="py-24">
            <ForgeContainer>
                <h2 className="text-3xl font-bold text-forgeBlue
                mb-12 text-center">
                    Selected Work 
                </h2>
                <div className="grid gap-6 sm:grid-cols-2
                lg:grid-cols-3">
                    {portfolioData.map((project)=> (
                        <ForgePortfolioCard 
                        key={project.id}
                        project={project}/>
                    ))}
                </div>
            </ForgeContainer>
        </section>
    )
}

export default ForgePortfolio; 