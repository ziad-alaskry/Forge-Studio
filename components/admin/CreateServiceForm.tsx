import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { CREATE_SERVICE } from "@/graphql/mutations";
import { GET_SERVICES } from "@/graphql/queries";
import ForgeButton from "../ui/ForgeButton";
import AdminLeadsTable from "./AdminLeadsTable";

const CreateServiceForm = () => {
    const [title,setTitle] = useState("");
    const [description , setDescription] = useState('');

    const [createService, {loading}] = useMutation(CREATE_SERVICE, {
        refetchQueries: [{query:GET_SERVICES}],
    });

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        await createService({
            variables: {title, description},
        })
        setTitle('');
        setDescription('');
    }

    return (
        <form 
        onSubmit={handleSubmit}
        className="bg-forgeMetal/40 p-6 rounded-2xl space-y-4"
        >
            {/* <h3 className="text-xl text-forgeBlue font-semibold">
                Create Service 
            </h3>
            <input
            className="w-full p-3 rounded-lg bg-black/40 text-white"
            placeholder="Service description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <ForgeButton label={loading? "Creating..." : "Create Service"}/> */}

            <section className="mt-2"> 
                <h2 className="text-2xl text-forgeBlue font-semibold mb-6">
                    Incoming Leads
                </h2>
                <AdminLeadsTable/>
            </section>
        </form>
    )
}

export default CreateServiceForm;