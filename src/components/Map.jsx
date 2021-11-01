import React from 'react';
import { GoogleMap, LoadScript ,Marker } from '@react-google-maps/api';

// const Map = ({ data }) => {
const Map = () => {
    const mapStyles = {
        height: "50vh",
        width: "100%",
    };

    const defaultCenter = {
        // lat: data.lat,
        // lng: data.lng
        
        lat: 19.7419372,
        lng: -99.9017832
    }
    return(
        <LoadScript googleMapsApiKey="AIzaSyB1g0WZWxDr9as-gAq0Ib5804p1BB0FqNg">
        {/* <LoadScript googleMapsApiKey="AIzaSyA-d2AGRbY5y2hAw82a8tYSzkgazCU90rw"> */}
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={9}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    )
};

export default Map;