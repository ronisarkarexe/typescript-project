import ICar from "./product.interface"
import CarModel from "./product.model"

export const createProductDb = async (payload: ICar): Promise<ICar> => {
    const product = await new CarModel(payload)
    product.save();
    return product
}

export const getAllProductDataDb = async() => {
    const product = await CarModel.find()
    return product;
}