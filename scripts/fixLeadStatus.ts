import mongoose from "mongoose";
import { Lead } from "@/models/Lead";

async function fix() {
  await mongoose.connect(process.env.MONGODB_URI!);

  await Lead.updateMany(
    { status: { $exists: true } },
    [{ $set: { status: { $toUpper: "$status" } } }]
  );

  console.log("Lead statuses normalized");
  process.exit(0);
}

fix();
