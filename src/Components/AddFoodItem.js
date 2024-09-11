import React, { useState } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { addFoodAction } from "@/Redux/Food/food.middleware"
import { foodSchema } from "@/validation/food.schema"
import { useDispatch } from 'react-redux'

const AddFoodItem = () => {
    const initialValue = {
        name: "",
        prize: "",
        imageAddress: "",
        description: ""
    }

    const dispatch = useDispatch()

    const { handleChange, handleSubmit, initialValues, touched, handleBlur, errors, resetForm, values } = useFormik({
        initialValues: initialValue,
        validationSchema: foodSchema,

        onSubmit: (values) => {

            const formData = new FormData();


            formData.append("name", values.name)
            formData.append("prize", values.prize)
            formData.append("description", values.description)

            // console.log("Values", values.imageAddress)

            if (values.imageAddress) {
                formData.append("imageAddress", values.imageAddress)
            }

            console.log("Form Data", formData)

            dispatch(addFoodAction(formData)).then(({ payload }) => {
                console.log("Payload", payload)
                if (payload?.success === true) {
                    resetForm()
                }
            })
        }
    })

    return (

        <Grid container >
            <Grid item xs={6} border={2} display={"flex"} justifyContent={"center"} margin={"auto"} >
                <Grid container>
                    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
                        <Grid item xs={12}
                            display={"flex"}
                            justifyContent={"center"}>
                            <Typography variant='h4'>
                                Add Food Item
                            </Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <Grid container mt={2}>
                                <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
                                    <TextField
                                        name='name'
                                        value={values.name}
                                        error={touched.name && errors.name}
                                        helperText={errors.name}
                                        touched={touched}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type='text'
                                        label="Name"
                                        variant="outlined" />
                                </Grid>
                                <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
                                    <TextField
                                        name='prize'
                                        value={values.prize}
                                        error={touched.prize && errors.prize}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={errors.prize}
                                        touched={touched}
                                        type="number"
                                        label="Prize"
                                        variant="outlined" />
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item xs={12} mt={1} display={"flex"} justifyContent={"center"}>
                            <TextField
                                sx={{ width: "82%" }}
                                name='imageAddress'
                                value={values.imageAddress}
                                InputLabelProps={{ shrink: true }}
                                error={touched.imageAddress && errors.imageAddress}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={errors.imageAddress}
                                touched={touched}
                                InputProps={{
                                    inputProps: {
                                        accept: "image/*",
                                        type: "file",
                                    },
                                    endAdornment: (
                                        <input
                                            type="file"
                                            onChange={(event) => {
                                                const file = event.currentTarget.files[0];
                                                console.log("event", event)
                                                if (file) {
                                                    setFieldValue("imageAddress", file); // Save file in form state
                                                    console.log("Selected file:", file.name); // Log the filename without fake path
                                                }
                                            }}
                                            style={{ display: "none" }} // Hide actual file input
                                            id="image-upload"
                                        />
                                    ),
                                }}
                                type="file"
                                label="Image"
                                variant="standard" />
                        </Grid>
                        <Grid item xs={12} mt={2} display={"flex"} justifyContent={"center"}>
                            <TextField
                                sx={{ width: "82%" }}
                                name='description'
                                value={values.description}
                                error={touched.description && errors.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={errors.description}
                                touched={touched}
                                type="text"
                                label="Description"
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={12}
                            display={"flex"}
                            justifyContent={"center"}  >
                            <Button
                                variant='contained'
                                color='success'
                                type='submit'
                                sx={{ width: "30%", margin: "10px 0px 10px 0px" }} >
                                Add Food Item
                            </Button>
                        </Grid>

                    </form>

                </Grid>
            </Grid>

        </Grid>

    )
}

export default AddFoodItem