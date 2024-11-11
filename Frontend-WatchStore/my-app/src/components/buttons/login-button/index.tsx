import React from 'react'
import Link from 'next/link'

const LoginButton = () =>{
    return(
    <Link href="/login">
        <div className='text-white flex flex-col gap-1 text-sm px-4 py-2 rounded hover:bg-slate-400
        cursor-pointer '>
            Login 
        </div>
    </Link>
    )
}


export default LoginButton;