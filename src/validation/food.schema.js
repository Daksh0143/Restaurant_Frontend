import * as Yup from "yup"

export const foodSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    prize: Yup.number().required(),
    imageAddress: Yup.string().required(),
    description: Yup.string().required(),
})



