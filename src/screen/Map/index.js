import axios from 'axios';
import React, { useEffect, useState } from "react";
import
{ GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import InfoWindowComponent from '../../component/InfoWindowComponent';
import MarkerComponent from '../../component/MarkerComponent';
import mapStyles from "./styles";

function Map ()
{
    const [ selectedPark, setSelectedPark ] = useState( null );
    const [ zoom, setZoom ] = useState( 3 );
    const [ center, setCenter ] = useState( { lat: 33.4211, lng: 33.6903 } )
    console.log( zoom );

    const [ mapAPI, setMapAPI ] = useState( [] );
    useEffect( () =>
    {
        console.log( "Hello World" );

        axios.get( `https://corona.lmao.ninja/v2/countries` )
            .then( ( res ) =>
            {
                const mapAPI = res.data;
                setMapAPI( mapAPI );
            } )
            .catch( error => console.error( `error123:${ error }` ) );
    }, [] )

    useEffect( () =>
    {
        const listener = e =>
        {
            if ( e.key === "Escape" )
            {
                setSelectedPark( null );
            }
        };
        window.addEventListener( "keydown", listener );

        return () =>
        {
            window.removeEventListener( "keydown", listener );
        };
    }, [] );

    return (
        <GoogleMap
            defaultZoom={ zoom }
            defaultCenter={ center }
            defaultOptions={ { styles: mapStyles, zoomControl: false, minZoom: 3, maxZoom: 15 } }
            zoom={ zoom }
            center={ center }
            maxZoom={ 10 }
            onZoomChanged={ zoom }
            onCenterChanged={ center }
        >
            <MarkerComponent setSelectedPark={ setSelectedPark } mapAPI={ mapAPI } zoom={ zoom } setZoom={ setZoom } setCenter={ setCenter } />

            {selectedPark && (
                <InfoWindowComponent setSelectedPark={ setSelectedPark } selectedPark={ selectedPark } />
            ) }
        </GoogleMap>
    );
}

export const MapWrapped = withScriptjs( withGoogleMap( Map ) );

