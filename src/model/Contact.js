import { Schema, model } from "mongoose";

const ContactSchema = Schema(
  {
    name: { 
      type: String, required: true, trim: true },
    lastname: {
      type: String,
      trim: true,
    },
    age:{
        type: Number,
        trim: true,
    },
    phone:{
        type: Number,
        trim: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Contact", ContactSchema);
