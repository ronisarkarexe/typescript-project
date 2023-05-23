import { Schema, model } from "mongoose";
import IUser from "./user.interface";

const userSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  password: { type: String, required: true },
  email: { type: String, required: true },
  dateOfBirth: {
    day: { type: String, required: true },
    month: { type: String, required: true },
    year: { type: String, required: true },
  },
  gender: { type: String, required: true },
  country: { type: String, required: true },
  contactNo: { type: Number, required: true },
  address: {
    addressLine1: { type: String, required: true },
    addressLine2: { type: String, required: true },
  },
  city: { type: String, required: true },
  stateProvince: { type: String, required: true },
  zipCode: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  agreeToTerms: { type: Boolean, required: true },
});

const User = model<IUser>('User', userSchema)
export default User;