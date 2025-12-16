import mongoose, {Schema, model, models} from "mongoose";

/** 
 * A Lead is anyone who contacts Forge Studio .
 * This is Not a use btw.
 */
const LeadSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type:String,
            required: true,
            trim:true,
        },
        /**
         * Helps us track the business state
         * without deleting data.
         */
        status: {
            type: String,
            enum: ["new", "contacted", "converted"],
            default: "new",
        },
    },
    {
        timestamps: true , // createdAt , updatedAt
    }
);

const Lead = models.Lead || model("Lead", LeadSchema);

export default Lead;