import {useQuery, useMutation} from "@apollo/client/react"
import { GET_LEADS } from "@/graphql/queries" 
import { UPDATE_LEAD_STATUS } from "@/graphql/mutations"
import { Lead } from "@/type/lead";


interface LeadQueryData {
    leads: Lead[];
}

const STATUSES = ["NEW", "CONTACTED", "IN_PROGRESS", "CLOSED"] as const ;

const AdminLeadsTable = () => {
    const {data, loading, error } = useQuery<LeadQueryData>(GET_LEADS);
    const [updateStatus] = useMutation(UPDATE_LEAD_STATUS);

    if(loading) return <p className="text-white">Loading leads...</p>
    if(error) {
        console.log(error)
        return <p className="text-red-400">Failed to load Leads</p>
    }
    return (
        <div className="space-y-4">
            {data?.leads.map((lead) => (
                <div 
                key={lead.id}
                className="bg-forgeMetal/60 border border-forgeGlow/20 p-4 rounded-xl">
                    <div className="flex justify-between items-start gap-6">
                        <div className="flex-1">
                            <h3 className="text-white font-semibold">{lead.name}</h3>
                            <p className="text-white/60 text-sm">{lead.email}</p>
                            <p className="text-white/70 mt-2">{lead.message}</p>

                            {lead.bundle && (
                                <p className="text-forgeBlue text-sm mt-2">
                                    Bundle: {lead.bundle}
                                </p>
                            )}
                        </div>

                        <select
                        className="bg-black/40 text-white rounded-lg p-2" 
                        value={lead.status}
                        onChange={(e) => {
                            updateStatus({
                                variables: {
                                    id: lead.id,
                                    status: e.target.value as Lead["status"],
                                    },
                                })
                            }
                        
                        } >
                            {STATUSES.map((status)=> (
                                <option key={status} value={status}>
                                    {status}
                                </option>
                            ))}
                    </select>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AdminLeadsTable;