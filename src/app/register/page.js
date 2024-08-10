"use client"
import React from 'react'
import { Textarea } from '@mui/joy'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation' 


const RestaurantRegister = () => {
  const router=useRouter()
  return (
    <Grid container >
      <Grid item xs={6} border={2} display={"flex"} justifyContent={"center"} margin={"auto"} >
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
              type='email'
              label="Email Id"
              variant="standard" />
          </Grid>
          <Grid item xs={6} display={"flex"} justifyContent={"center"}>
            <TextField 
              type='password'
              label="Password"  
              variant="standard" />
          </Grid>
          <Grid item xs={6} display={"flex"} justifyContent={"center"}>
            <TextField type='password' label="Confirm Password" variant="standard" />
          </Grid>
          <Grid item xs={6} display={"flex"} justifyContent={"center"}>
            <TextField type='password' label="Restaurant Name" variant="standard" />
          </Grid>
          <Grid item xs={6} display={"flex"} justifyContent={"center"}>
            <TextField type='password' label="Location Name" variant="standard" />
          </Grid>
          <Grid item xs={6} display={"flex"} justifyContent={"center"}>
            <TextField type='password' label="Contact Number" variant="standard" />
          </Grid>
          <Grid item xs={12} padding={2} >
            <Textarea 
              placeholder='Enter your address'
              minRows={5}
              sx={{width:"83%",margin:"auto"}}
              />
          </Grid>

          <Grid item xs={12}
            display={"flex"}
            justifyContent={"center"}  >
            <Button
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
      </Grid>
    </Grid>
  )
}

export default RestaurantRegister