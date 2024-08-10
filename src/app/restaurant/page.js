"use client"
import React, { useState } from 'react'
import RestaurantLogin from '../login/page'
import RestaurantRegister from '../register/page'
import { Button } from '@mui/material'

const Restaurant = () => {
    const [login, setLogin] = useState(true)


    return (
        <>
            {login ? <RestaurantLogin /> : <RestaurantRegister />}
            <Button onClick={()=>setLogin(!login)}>
                {login ? "Do You Have not account? Signup" : "Go to Signup"}
            </Button>
        </>
    )
}

export default Restaurant