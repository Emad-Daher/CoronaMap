import React from 'react';
import { Marker } from "react-google-maps";

function MarkerComponent ( { setSelectedPark, mapAPI, setZoom } )
{
    return mapAPI.map( park => (
        <Marker
            key={ park.countryInfo._id }
            position={ {
                lat: park.countryInfo.lat,
                lng: park.countryInfo.long
            } }
            onClick={ () =>
            {
                setSelectedPark( park );
                setZoom( 8 )
            } }
            icon={ {
                url: `/coronavirus-5107715_1280.webp`,
                scaledSize: new window.google.maps.Size( 15, 15 )
            } }
        />
    ) )


}

export default MarkerComponent
