import { Schema, model } from "mongoose";
import ICar from "./product.interface";

const carSchema = new Schema<ICar>(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true, unique: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    mileage: { type: Number, required: true },
    price: { type: Number, required: true },
    fuelType: {
      type: String,
      enum: ["gasoline", "diesel", "electric", "hybrid"],
      required: true,
    },
    transmission: {
      type: String,
      enum: ["manual", "automatic"],
      required: true,
    },
    engineCapacity: { type: Number, required: true },
    numberOfDoors: { type: Number, enum: [3, 4, 5], required: true },
    isElectric: { type: Boolean, required: true },
    features: { type: [{ name: String, description: String }], required: true },
    description: { type: String, required: true },
    topSpeed: { type: Number },
    acceleration: { type: Number },
    fuelEfficiency: {
      type: {
        city: { type: Number },
        highway: { type: Number },
      },
    },
    seatingCapacity: { type: Number, required: true },
    isFourWheelDrive: { type: Boolean },
    owner: {
      type: {
        name: { type: String },
        contact: {
          type: {
            phone: { type: String },
            email: { type: String },
          },
        },
      },
    },
    location: {
      type: {
        city: { type: String },
        state: { type: String },
        country: { type: String },
      },
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CarModel = model<ICar>("Car", carSchema);

export default CarModel;
