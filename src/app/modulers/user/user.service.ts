import { Types } from "mongoose";
import IUser from "./user.interface";
import User from "./user.model";

export const createUserDb = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);
  await user.save();
  return user;
};

export const getUserDataDb = async () => {
  const user = await User.find();
  return user;
};
/*
export const userUpdateDb = async (
  userId: string,
  updateData: Partial<IUser>
): Promise<IUser | null> => {
  try {
    const user = await User.findOneAndUpdate(
      { id: userId },
      { $set: updateData },
      { new: true }
    );

    return user;
  } catch (error) {
    console.error("Error updating user:", error);
    return null;
  }
};*/

export const userUpdateDb = async (
  userId: Types.ObjectId,
  updateData: Partial<IUser>
): Promise<IUser | null> => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $set: updateData },
      { new: true }
    );
    return user;
  } catch (error) {
    console.error("Error updating user:", error);
    return null;
  }
};

export const userDeleteByIbDB = async (
  userId: Types.ObjectId
): Promise<IUser | null> => {
  try {
    const user = await User.findOneAndDelete({ _id: userId });
    console.log("g");
    return user;
  } catch (error) {
    console.error("Id is not valid", error);
    return null;
  }
};

export const getUserByIdDb = async (
  userId: Types.ObjectId
): Promise<IUser | null> => {
  try {
    const user = await User.findById({ _id: userId });
    console.log(user);
    return user;
  } catch (error) {
    console.error("Id is not valid", error);
    return null;
  }
};

// export const getSingleFilterUserId = async ( payload: string): Promise<IUser | null> => {
//   const user = await User.findOne({ id: payload });
//   return user;
// };
