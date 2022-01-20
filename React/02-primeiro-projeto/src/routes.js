import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlanetsScreen from './screens/planets';
import PlanetScreen from './screens/planet';


const WebRoutes = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <PlanetsScreen/> }/>
            <Route path='/planet/:id' element={ <PlanetScreen/> }/>
        </Routes>
    </BrowserRouter>

    )
}


export default WebRoutes;