import React from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Github(){
     const data = useLoaderData();
  return (
    <>
        <div className='text-center text-2xl bg-gray-300 p-4 font-extrabold        underline'>
          Github Info
        </div>
        <h1 className='text-center text-2xl bg-gray-300 p-4'>
          Followers : {data.followers}
        </h1>
        <div className='text-center text-2xl bg-gray-300 p-4'>
          Repository : {data['public_repos']}
        </div>
    </>
  )
}

export  const githubInfoLoader  =   async  ()=>{
  const response =   await fetch('https://api.github.com/users/hiteshchoudhary') ;   
  return response.json() ; 
}