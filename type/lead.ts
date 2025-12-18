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
  bundle?: string | null;
  status: LeadStatus;
  createdAt: string;
}
