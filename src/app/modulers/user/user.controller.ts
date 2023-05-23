import { Request, Response } from "express";
import {
  createUserDb,
  getUserByIdDb,
  getUserDataDb,
  userDeleteByIbDB,
  userUpdateDb,
} from "./user.service";
import { Types } from "mongoose";

export const createUser = async (req: Request, res: Response) => {
  const data = req.body;
  const user = await createUserDb(data);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUserData = async (req: Request, res: Response) => {
  const user = await getUserDataDb();
  res.status(200).json({
    status: "success",
    data: user,
  });
};

/*
export const updateUser = async (req: Request, res: Response) => {
  try{
    const {id} = req.params;
    const query = req.body;
    const user = await userUpdateDb(id, query);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch(err){
    res.status(500).json({ error: 'Internal server error' });
  }
}*/

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const query = req.body;
    const userId = new Types.ObjectId(id);
    const user = await userUpdateDb(userId, query);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "Please Provide Valid Information" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const userDelete = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = new Types.ObjectId(id);
    const user = await userDeleteByIbDB(userId);
    if (user) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error("Error occurred while deleting user", err);
    res.status(500).json({ message: "An error while deleting user" });
  }
};


export const getUserId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = new Types.ObjectId(id);
    const user = await getUserByIdDb(userId);
    console.log(user)
    res.status(200).json({
      status: "success",
      data: user
    });
  } catch (error) {
    res.status(500).json({ message: "An error while getting user by id" });
  }
};


// export const getSinglefilterUser = async (req: Request, res: Response) => {
//   const {id} = req.params;
//   const userIdFilter = await getSingleFilterUserId(id);
//   res.status(200).json({
//     status: "success",
//     data: userIdFilter
//   })
// }