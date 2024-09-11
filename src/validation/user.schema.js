import * as Yup from "yup"

export const userSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
    restaurantName:Yup.string().required(),
    city:Yup.string().required(),
    address:Yup.string().required(),
    contactNumber:Yup.string().min(10).max(10).required()
})


export const loginSchema=Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required()
})

