import mongoose from "mongoose";
import { Customer } from "../types/customer.type";
import { autoIncrement } from "mongoose-plugin-autoinc";

const CustomerShema = new mongoose.Schema<Customer>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  address: { type: String },
  code: { type: String },
});

CustomerShema.plugin(autoIncrement, {
  model: "Customer",
  field: "id",
});

export const CustomerModel = mongoose.model("Customer", CustomerShema);
