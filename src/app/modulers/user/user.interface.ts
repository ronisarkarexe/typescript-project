interface IUser {
  id: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  password: string;
  email: string;
  dateOfBirth: {
    day: string;
    month: string;
    year: string;
  };
  gender: "Male" | "Female" | "Other";
  country: string;
  contactNo: number;
  address: {
    addressLine1: string;
    addressLine2: string;
  };
  city: string;
  stateProvince: string;
  zipCode: string;
  phoneNumber: string;
  agreeToTerms: boolean;
}

export default IUser;