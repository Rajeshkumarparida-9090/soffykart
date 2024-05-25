import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const googlemapapikey="AIzaSyABX2ygfGhCqgAREDXJ47pQKnZx-GLA3p0"

export const CustomMap = (props)=>{
    const [location, setLocation] = useState({});
    // const [mapCenter, setMapCenter] = useState({ lat: 47.444, lng: -122.176 });
    const mapStyles = {
        width: '100%',
        height: '100%',
      };
     

    // const onMarkerDragEnd = (coord, index, e) => {
    //     const lat = e.latLng.lat();
    //     const lng = e.latLng.lng();
    //     setMapCenter({ lat, lng });
    // }
   

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    setLocation({ lat, lng });
                },
                (error) => {
                    console.error('Error getting current location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);
    console.log("location", location)
    return(
        <>
        <Map
          google={props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={location}
          center={location}
        >
            <Marker 
            position={location} 
            // draggable={true}
            // onDragend={onMarkerDragEnd}
            />
        </Map>
        </>
    )
}
export default GoogleApiWrapper({
    apiKey: googlemapapikey
  })(CustomMap);

