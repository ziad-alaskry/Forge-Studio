import mongoose, {Schema, models, model} from 'mongoose';

const ServiceSchema = new Schema (
    {
        title: {type: String , required: true},
        description: {type:String , required: true}
    },
    { timestamps: true }
);

export const Service = models.Service || model('Service' , ServiceSchema);