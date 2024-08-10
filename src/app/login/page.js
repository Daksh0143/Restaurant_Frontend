"use client"
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/navigation' 

const RestaurantLogin = () => {
    const router=useRouter()
    return (
        <Grid container >
            <Grid item xs={6} border={2} display={"flex"} justifyContent={"center"} margin={"auto"} >
                <Grid container>
                    <Grid item xs={12}
                        display={"flex"}
                        justifyContent={"center"}>
                        <Typography variant='h4'>
                            Login Page
                        </Typography>
                    </Grid>
                    <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                        <TextField
                            type='email'
                            label="Email Id"
                            variant="standard" />
                    </Grid>
                    <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                        <TextField type='password' label="Password" variant="standard" />
                    </Grid>
                    <Grid item xs={12}
                        display={"flex"}
                        justifyContent={"center"}  >
                        <Button
                            variant='contained'
                            color='success'
                            sx={{ width: "30%", margin: "10px 0px 10px 0px" }} >
                            Login
                        </Button>
                    </Grid>
                    <Grid item xs={12} textAlign={"end"}>
                        <Button
                            onClick={()=>{
                                router.push("/register")
                            }}                        
                            variant='text'
                            color='primary'
                            sx={{ marginTop: "10px",cursor:"pointer" }} >
                            Do you have not account? Signup
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default RestaurantLogin