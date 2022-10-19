import React from 'react'
import {Routes,Route} from "react-router-dom"
import Form from '../Components/Form/Form';
import Homepage from './Homepage';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/form' element={<Form/>} />
        </Routes>
  )
}

export default AllRoutes;