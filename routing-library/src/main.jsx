import React from 'react'
import ReactDOM from 'react-dom/client';
import { Route , RouterProvider ,  createBrowserRouter, createRoutesFromElements }  from 'react-router-dom';
import './index.css';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import About from './Components/About/About.jsx'
import User from './Components/User/User.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx';


/* First Method to make a router */
// const router  = createBrowserRouter([
//   {
//   path :   '/' ,
//   element  : <Route /> ,  
//   children  :  [
//     {
//       path  :  "" ,  
//       element  : <Home />
//     },
//     {
//       path  :  "about" ,  
//       element  : <About />
//     },
//     {
//       path  :  "contact" ,  
//       element  : <Contact />
//     }
//   ]
//   }
// ]) ;  


/* Second Method to make a router */
const router  =   createBrowserRouter(createRoutesFromElements(
  <Route path = "/" element = {<Layout/>}>
    <Route path="" element = {<Home/>} />
    <Route path="about" element = {<About/>} />
    <Route path="contact" element = {<Contact/>} />
    <Route path="user/:userid/:usernumber" element = {<User/>} />
    <Route path="user/:userid" element = {<User/>} />
    {/* Loader takes an callback function that return something and get the returning value in the useLoaderData Hook in the particular Component */}
    <Route loader = {githubInfoLoader} path="github" element = {<Github/>} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)