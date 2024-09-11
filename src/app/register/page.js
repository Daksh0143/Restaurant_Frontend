"use client"
import React from 'react'
import { Textarea } from '@mui/joy'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import { registerUserAction } from "../../Redux/User/user.middleware"
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { userSchema } from '@/validation/user.schema'







const RestaurantRegister = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const initialValue = {
    name: "Daxesh",
    email: "daxeshchauhan1615@gmail.com",
    password: "Admin@123",
    restaurantName: "fsjdb",
    city: "vjkdfv",
    address: "vekhge",
    contactNumber: "1234567890"
  }
  const { handleChange, handleSubmit, initialValues, touched, handleBlur, errors, resetForm, values } = useFormik({
    initialValues: initialValue,
    validationSchema: userSchema,

    onSubmit: (values) => {
      console.log("Values in formik", values)
      dispatch(registerUserAction(values)).then(({ payload }) => {
        if (payload) {
          resetForm()
        }
      })
    }
  })



  return (
    <>
      <Header />
      <Grid container >
        <Grid item xs={6} border={2} display={"flex"} justifyContent={"center"} margin={"auto"} >
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={12}
                display={"flex"}
                justifyContent={"center"}>
                <Typography variant='h4'>
                  Register Page
                </Typography>
              </Grid>
              <Grid item xs={6} display={"flex"} justifyContent={"center"}>
                <TextField
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type='email'
                  label="Email Id"
                  variant="standard"
                  touched={touched}
                  helperText={errors.email}
                  error={touched.email && errors.email} />
              </Grid>
              <Grid item xs={6} display={"flex"} justifyContent={"center"}>
                <TextField
                  name='password'
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type='password'
                  label="Password"
                  variant="standard"
                  touched={touched}
                  helperText={errors.password}
                  error={touched.password && errors.password}

                />
              </Grid>
              <Grid item xs={6} display={"flex"} justifyContent={"center"}>
                <TextField
                  name='name'
                  value={values.name}
                  type='text'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Name"
                  variant="standard"
                  touched={touched}
                  helperText={errors.name}
                  error={touched.name && errors.name}
                />

              </Grid>
              <Grid item xs={6} display={"flex"} justifyContent={"center"}>
                <TextField
                  name='retaurantName'
                  value={values.retaurantName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type='text'
                  label="Restaurant Name"
                  variant="standard"
                  touched={touched}
                  helperText={errors.restaurantName}
                  error={touched.restaurantName && errors.restaurantName}

                />
              </Grid>
              <Grid item xs={6} display={"flex"} justifyContent={"center"}>
                <TextField
                  name='city'
                  value={values.city}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type='text'
                  label="City"
                  variant="standard"
                  touched={touched}
                  helperText={errors.city}
                  error={touched.city && errors.city}
                />
              </Grid>
              <Grid item xs={6} display={"flex"} justifyContent={"center"}>
                <TextField
                  name='contactNumber'
                  value={values.contactNumber}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type='text'
                  label="Contact Number"
                  variant="standard"
                  touched={touched}
                  helperText={errors.contactNumber}
                  error={touched.contactNumber && errors.contactNumber}

                />
              </Grid>
              <Grid item xs={12} padding={2} >
                <Textarea
                  name='address'
                  value={values.address}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder='Enter your address'
                  minRows={5}
                  sx={{ width: "83%", margin: "auto" }}
                  touched={touched}
                  helperText={errors.address}
                  error={touched.address && errors.address}
                />
              </Grid>

              <Grid item xs={12}
                display={"flex"}
                justifyContent={"center"}  >
                <Button
                  type='submit'
                  variant='contained'
                  color='success'
                  sx={{ width: "30%", margin: "10px 0px 10px 0px" }} >
                  Register
                </Button>
              </Grid>
              <Grid item xs={12} textAlign={"end"}>
                <Button
                  onClick={() => {
                    router.push("/login")
                  }}
                  variant='text'
                  color='primary'
                  sx={{ marginTop: "10px", cursor: "pointer" }} >
                  Do you have not account? Signup
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Footer />
    </>
  )
}

export default RestaurantRegister