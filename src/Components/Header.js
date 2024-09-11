import { Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Logo from "../public/logo.png"
import Image from 'next/image'



const Header = () => {
  return (
    <Grid container spacing={2} bgcolor={"red"} marginBottom={2}>
      <Grid item xs={1}
      >
        <Image src={Logo.src} style={{borderRadius:"60%"}} height={40} width={80} alt='logo' />
      </Grid>
      <Grid item xs={11} display={"flex"} alignItems={'center'}>
        <Link href="/" style={{ marginLeft: "20px", textDecoration: "none", color: "white" }}>Home</Link>
        <Link href="/login" style={{ marginLeft: "20px", textDecoration: "none", color: "white" }}>Login</Link>
        <Link href="/profile" style={{ marginLeft: "20px", textDecoration: "none", color: "white" }}>Profile</Link>
      </Grid>
    </Grid>
  )
}

export default Header