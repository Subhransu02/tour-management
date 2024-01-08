import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Tours from "./../pages/Tours";
import TourDetails from '../pages/TourDetails';
import SearchResultList from '../pages/SearchResultList';
import Register from '../pages/Register';
import ThankYou from '../pages/ThankYou';
const Routers = () => {
  return (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="tours/search" element={<SearchResultList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  )
}

export default Routers