import axios from 'axios';
import React, { useEffect, useState } from "react";
import
{
    GoogleMap,

    InfoWindow, Marker, withGoogleMap,
    withScriptjs
} from "react-google-maps";
import mapStyles from "./styles";
import MarkerComponent from '../../component/MarkerComponent'
import InfoWindowComponent from '../../component/InfoWindowComponent'

function Map ()
{
    const [ selectedPark, setSelectedPark ] = useState( null );
    const [ zoom, setZoom ] = useState( 4 );
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
            .catch( error => console.error( `error:${ error }` ) );
    }, [ zoom ] )

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
            defaultCenter={ { lat: 33.4211, lng: 33.6903 } }
            defaultOptions={ { styles: mapStyles } }
            zoom={ zoom }
        >

            {/* {mapAPI.map( park => (
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
            ) ) } */}
            <MarkerComponent setSelectedPark={ setSelectedPark } mapAPI={ mapAPI } setZoom={ setZoom } />
            {/* {mapAPI.map( park => (
                <MarkerComponent
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
            ) ) } */}

            {selectedPark && (
                // <InfoWindow
                //     onCloseClick={ () =>
                //     {
                //         setSelectedPark( null );
                //     } }
                //     position={ {
                //         lat: selectedPark.countryInfo.lat,
                //         lng: selectedPark.countryInfo.long
                //     } }
                // >
                //     <div>
                //         <h2> Name : { selectedPark.country }</h2>
                //         <p> cases : { selectedPark.cases }</p>
                //         <p> today Cases : { selectedPark.todayCases }</p>
                //         <p> deaths : { selectedPark.deaths }</p>
                //         <p> todayDeaths : { selectedPark.todayDeaths }</p>
                //         <p> recovered : { selectedPark.recovered }</p>
                //         <p> todayRecovered : { selectedPark.todayRecovered }</p>
                //         <p> active : { selectedPark.active }</p>
                //         <p> critical : { selectedPark.critical }</p>
                //         <p> casesPerOneMillion : { selectedPark.casesPerOneMillion }</p>
                //         <p> deathsPerOneMillion : { selectedPark.deathsPerOneMillion }</p>
                //     </div>
                // </InfoWindow>
                <InfoWindowComponent setSelectedPark={ setSelectedPark } selectedPark={ selectedPark } />
            ) }
        </GoogleMap>
    );
}

export const MapWrapped = withScriptjs( withGoogleMap( Map ) );

