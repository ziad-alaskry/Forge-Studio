export interface ForgeProject {
    id: number;
    title:string;
    category:string;
}

export const portfolioData: ForgeProject[] = [
    {
        id:1, title:"Smart Home Dashboard", category:"Web Application", 
    },
    {
        id:2 , title:"Cognitive Bias Explorer", category:"Educational"
    },
    {
        id:3 , title:"Forge Studio", category:"Brand Platform"
    }
]