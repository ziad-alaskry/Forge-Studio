import ForgePortfolioCard from "../ForgePortfolioCard";
import ForgeContainer from "../ForgeContainer";
import { useQuery } from "@apollo/client/react";
import { GET_PROJECTS } from "@/graphql/queries";

interface Project {
    id:string;
    title:string;
    category:string;
}

interface ProjectsData {
    projects: Project[] ;
}

const ForgePortfolio = () => {

    const {data ,loading, error} = useQuery<ProjectsData>(GET_PROJECTS);

    if(loading) {
        return (
            <section className="py-24 text-center text-gray-400">
                Loading projects
            </section>
        )
    }

    if(error) {
        return (
            <section className="py-24 text-center text-red-400">
                Failed to load projects
            </section>
        )
    }

    if (!data || data.projects.length === 0) {
        return <p className="text-gray-400">No projects yet</p>;
    }
    // data.projects.map((project:any)=>
    return (
        <section className="py-24">
            <ForgeContainer>
                <h2 className="text-3xl font-bold text-forgeBlue
                mb-12 text-center">
                    Selected Work 
                </h2>
                <div className="grid gap-6 sm:grid-cols-2
                lg:grid-cols-3">
                    {data.projects.map((project: Project)=> ( 
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