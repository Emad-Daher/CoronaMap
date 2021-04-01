import axios from 'axios';
import React, { useEffect, useState } from "react";
import
{
    GoogleMap,

    InfoWindow, Marker, withGoogleMap,
    withScriptjs
} from "react-google-maps";
import mapStyles from "./styles";

function Map ()
{
    const [ selectedPark, setSelectedPark ] = useState( null );

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
            .catch( error => console.error( `error:${ error }` ) );
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
            defaultZoom={ 4 }
            defaultCenter={ { lat: 45.4211, lng: -75.6903 } }
            defaultOptions={ { styles: mapStyles } }
        >

            {mapAPI.map( park => (
                <Marker
                    key={ park.countryInfo._id }
                    position={ {
                        lat: park.countryInfo.lat,
                        lng: park.countryInfo.long
                    } }
                    onClick={ () =>
                    {
                        setSelectedPark( park );
                    } }
                    icon={ {
                        url: `/coronavirus-5107715_1280.webp`,
                        scaledSize: new window.google.maps.Size( 15, 15 )
                    } }
                />
            ) ) }

            {selectedPark && (
                <InfoWindow
                    onCloseClick={ () =>
                    {
                        setSelectedPark( null );
                    } }
                    position={ {
                        lat: selectedPark.countryInfo.lat,
                        lng: selectedPark.countryInfo.long
                    } }
                >
                    <div>
                        <h2> Name : { selectedPark.country }</h2>
                        <p> cases : { selectedPark.cases }</p>
                        <p> today Cases : { selectedPark.todayCases }</p>
                        <p> deaths : { selectedPark.deaths }</p>
                        <p> todayDeaths : { selectedPark.todayDeaths }</p>
                        <p> recovered : { selectedPark.recovered }</p>
                        <p> todayRecovered : { selectedPark.todayRecovered }</p>
                        <p> active : { selectedPark.active }</p>
                        <p> critical : { selectedPark.critical }</p>
                        <p> casesPerOneMillion : { selectedPark.casesPerOneMillion }</p>
                        <p> deathsPerOneMillion : { selectedPark.deathsPerOneMillion }</p>
                    </div>
                </InfoWindow>
            ) }
        </GoogleMap>
    );
}

export const MapWrapped = withScriptjs( withGoogleMap( Map ) );

