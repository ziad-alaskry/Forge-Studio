export interface ForgeService {
    id: number;
    title:string;
    description: string ;

}

export const servicesData: ForgeService[] = [
    {
        id: 1,
        title:"Product Design" ,
        description:`High-level UI/UX crafted
        for clarity, emotion and percision.`
    },
    {
        id:2,
        title:"Full-Stack Development",
        description:`Modern scalable systems using Next.js, GraphQL
        and MongoDB.`
    },
    {
        id:3,
        title:"Performance Optimization",
        description:`Fast, Efficient, and optimised web experiences.`
    }
] 