"use client"
import { Button, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/Components/Header"
import AddFoodItem from "@/Components/AddFoodItem"


export default function Home() {
  const pathname = usePathname()
  const router = useRouter()
  const [isVisible,setIsVisible]=useState(true)

  console.log("Path name", pathname)


  useEffect(() => {
    if (!localStorage.getItem("Token")) {
      router.push("/login")
    }
  }, [router])


  console.log("Pathname", pathname)
  return (
    <>
      <Header />
      <Button onClick={()=>setIsVisible(!isVisible)}>Add Food Item</Button>
      <Button>Add Food Item</Button>
      {isVisible ? <AddFoodItem/> : null}

      <Typography variant="h5">Daxesh Chauhan</Typography>
    </>
  );
}
