import React from 'react';
import { Marker } from "react-google-maps";

function MarkerComponent ( { setSelectedPark, mapAPI, setZoom, setCenter, zoom } )
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
                setCenter( {
                    lat: park.countryInfo.lat,
                    lng: park.countryInfo.long
                } )
                // { zoom <= 3 || zoom <= 4 ? setZoom( zoom + 4 ) : setZoom( zoom - 2 ) }
                // { zoom <= 8 ?? setZoom( zoom - 4 ) }
                // setZoom( zoom + 1 );
                // { zoom === 3 ? setZoom( zoom + 4 ) : setZoom() }
                // { zoom === 4 ? setZoom( zoom + 3 ) : setZoom() }
                // { zoom === 5 ? setZoom( zoom + 2 ) : setZoom() }
                // { zoom === 6 ? setZoom( zoom + 1 ) : setZoom() }
                // { zoom === 7 ? setZoom( zoom ) : setZoom() }
                // { zoom === 8 ? setZoom( zoom - 2 ) : setZoom() }
                // { zoom === 9 ? setZoom( zoom - 3 ) : setZoom() }
                // { zoom === 10 ? setZoom( zoom - 4 ) : setZoom() }
                // { zoom === 11 ? setZoom( zoom - 5 ) : setZoom() }
                // { zoom === 12 ? setZoom( zoom - 6 ) : setZoom() }
                {
                    if ( zoom === 3 )
                    {
                        setZoom( zoom + 4 )
                    }
                    if ( zoom === 4 )
                    {
                        setZoom( zoom + 3 )
                    }
                    if ( zoom === 5 )
                    {
                        setZoom( zoom + 2 )
                    }
                    if ( zoom === 6 )
                    {
                        setZoom( zoom + 1 )
                    }
                    if ( zoom === 7 )
                    {
                        setZoom( zoom + 1 )
                    }
                    if ( zoom === 8 )
                    {
                        setZoom( zoom - 2 )
                    }
                    if ( zoom === 9 )
                    {
                        setZoom( zoom - 3 )
                    }
                    if ( zoom === 10 )
                    {
                        setZoom( zoom - 4 )
                    }
                    if ( zoom === 11 )
                    {
                        setZoom( zoom - 5 )
                    }
                    if ( zoom === 12 )
                    {
                        setZoom( zoom - 6 )
                    }
                }
            } }
            icon={ {
                url: `/coronavirus-5107715_1280.webp`,
                scaledSize: new window.google.maps.Size( 15, 15 )
            } }
        />
    ) ).slice( 0, 100 )


}

export default MarkerComponent
