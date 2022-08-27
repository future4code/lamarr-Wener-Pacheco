import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage"
import ListTrips from "../pages/ListTrips/ListTripsPage";
import TripDetails from "../pages/TripDetails/TripDetailsPage";
import AplicationForm from "../pages/ApplicationForm/ApplicationFormPage";
import Login from "../pages/Login/LoginPage";
import CreateTrip from "../pages/CreateTrip/CreateTripPage";
import AdminHome from "../pages/AdminHome/AdminHomePage";

const Rotas=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/trips/list" element={<ListTrips/>}/>
                <Route path="/trips/application" element={<AplicationForm/>}/>
                <Route path="/admin/trips/list" element={<AdminHome/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/admin/trips/create" element={<CreateTrip/>}/>
                <Route path="/admin/trips/:id" element={<TripDetails/>}/>
            </Routes>
        </BrowserRouter>
        )
    }

export default Rotas