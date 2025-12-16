import mongoose from 'mongoose';

declare global {
    var mongoose: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    } | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI as string;

if(!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI in .env.local")
}

let cached = global.mongoose as {
    conn: typeof mongoose | null ;
    promise: Promise<typeof mongoose> | null;
}

if(!cached) {
    cached = global.mongoose = {conn:null , promise:null};
}

export async function connectDB() {
    if(cached.conn) return cached.conn;
    if(!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI) 
    }
    cached.conn = await cached.promise;
    return cached.conn;
}