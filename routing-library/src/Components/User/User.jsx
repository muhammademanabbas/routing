import React from 'react'
import { useParams } from 'react-router-dom'
export default function User() {
     const {userid , usernumber} = useParams();  
  return (
    <>
        <h1 className='text-center text-2xl bg-gray-300 p-20'>User : {userid}</h1>
        <h1 className='text-center text-2xl bg-gray-300 p-20'>Number : {usernumber}</h1>
    </>
  )
}