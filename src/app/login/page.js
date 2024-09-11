"use client"
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useFormik } from 'formik'
import { loginUserAction } from "@/Redux/User/user.middleware"
import { loginSchema } from "@/validation/user.schema"
import { useDispatch } from 'react-redux'


const RestaurantLogin = () => {
    const router = useRouter()
    const dispatch = useDispatch()

    const initialValue = {
        email: "daxeshchauhan1615@gmail.com",
        password: "Admin@123"
    }

    const { handleChange, handleSubmit, initialValues, touched, handleBlur, errors, resetForm, values } = useFormik({
        initialValues: initialValue,
        validationSchema: loginSchema,

        onSubmit: (values) => {
            console.log("Values in formik", values)
            dispatch(loginUserAction(values)).then(({ payload }) => {
                    console.log("Payload",payload)
                    if (payload?.success === true) {
                        localStorage.setItem("Token", payload.data.token)
                        localStorage.setItem("Existing User", JSON.stringify(payload.data.existingUser))
                        router.push("/profile")
                    }
                

            })
            .catch((error)=>{
                // console.log("Error in Login Page",error)
            })
        }
    })

    return (
        <Grid container >
            <Grid item xs={6} border={2} display={"flex"} justifyContent={"center"} margin={"auto"} >
                <Grid container>
                    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                        <Grid item xs={12}
                            display={"flex"}
                            justifyContent={"center"}>
                            <Typography variant='h4'>
                                Login Page
                            </Typography>
                        </Grid>
                        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                            <TextField
                                name='email'
                                value={values.email}
                                error={touched.email && errors.email}
                                helperText={errors.email}
                                touched={touched}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type='email'
                                label="Email Id"
                                variant="standard" />
                        </Grid>
                        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                            <TextField
                                name='password'
                                value={values.password}
                                error={touched.password && errors.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={errors.password}
                                touched={touched}
                                type='password'
                                label="Password"
                                variant="standard" />
                        </Grid>
                        <Grid item xs={12}
                            display={"flex"}
                            justifyContent={"center"}  >
                            <Button
                                variant='contained'
                                color='success'
                                type='submit'
                                sx={{ width: "30%", margin: "10px 0px 10px 0px" }} >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} textAlign={"end"}>
                            <Button
                                onClick={() => {
                                    router.push("/register")
                                }}
                                variant='text'
                                color='primary'
                                sx={{ marginTop: "10px", cursor: "pointer" }} >
                                Do you have not account? Signup
                            </Button>
                        </Grid>
                    </form>

                </Grid>
            </Grid>

        </Grid>
    )
}

export default RestaurantLogin