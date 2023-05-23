interface ICar {
  brand: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  fuelType: "gasoline" | "diesel" | "electric" | "hybrid";
  transmission: "manual" | "automatic";
  engineCapacity: number;
  numberOfDoors: 3 | 4 | 5;
  isElectric: boolean;
  features: Array<{ name: string; description: string }>;
  description: string;
  topSpeed?: number;
  acceleration?: number;
  fuelEfficiency?: { city: number; highway: number };
  seatingCapacity: number;
  isFourWheelDrive?: boolean;
  owner?: {
    name: string;
    contact: {
      phone: string;
      email?: string;
    };
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
}

export default ICar;