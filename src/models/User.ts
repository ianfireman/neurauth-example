import mongoose from "mongoose";

export type SampleDocument = mongoose.Document & {
    name: number;
    age: string;
};

const sampleSchema = new mongoose.Schema({
  name: String,
  age: Number
}, { timestamps: true });

export const Sample = mongoose.model<SampleDocument>("Sample", sampleSchema);
