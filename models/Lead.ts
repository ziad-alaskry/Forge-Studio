import mongoose, { Schema, models } from "mongoose";

export type LeadStatus =
  | "NEW"
  | "CONTACTED"
  | "IN_PROGRESS"
  | "CLOSED";

export interface Lead {
  id: string;
  name: string;
  email: string;
  message: string;

  bundle?: string;
  status: LeadStatus;

  createdAt: Date;
}


const LeadSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

export const Lead = models.Lead || mongoose.model("Lead", LeadSchema);
