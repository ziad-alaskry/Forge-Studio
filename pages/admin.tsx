import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import CreateServiceForm from "@/components/admin/CreateServiceForm";
import ForgeContainer from "@/components/ui/ForgeContainer";
import { ADMIN_EMAIL } from "@/lib/admin";

const AdminPage = () => {
  return (
    <section className="py-32">
      <ForgeContainer>
        <h1 className="text-4xl text-forgeBlue font-bold mb-12">
          Forge Admin
        </h1>
        <CreateServiceForm />
      </ForgeContainer>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session || session.user?.email !== ADMIN_EMAIL) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default AdminPage;
