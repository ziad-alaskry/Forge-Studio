import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import CreateServiceForm from "@/components/admin/CreateServiceForm";
import ForgeContainer from "@/components/ui/ForgeContainer";

const AdminPage = () => {
    return (
        <section className="py-32">
            <ForgeContainer>
                <h1 className="text-4xl text-forgeBlue font-bold mb-12">
                    Forge Admin
                </h1>
                <CreateServiceForm/>
            </ForgeContainer>
        </section>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) =>{
    const session = await getSession(context);
    if(!session) {
        return {
            redirect:{
                destination: "/auth/signin",
                permanent: false,
            },
        };
    }

    return {
        props: {session},
    }
}

export default AdminPage;