"use client"
import React from 'react'
import Link from 'next/link'

const RegisterButton = () =>{
    return(
    <Link href="/register">

        <div className=' text-white flex flex-col gap-1 text-sm px-4 py-2 rounded hover:bg-slate-400 
            cursor-pointer '>
            Register 
        </div>
           
    </Link>
    )
}


export default RegisterButton;