import mongoose, {Schema, models, model} from 'mongoose';

const ProjectSchema = new Schema (
    {
        title: {type:String , required: true},
        category: {type:String , required: true}
    }, 
    {timestamps: true}
)

export const Project = models.Project || model('Project', ProjectSchema);