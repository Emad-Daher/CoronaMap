import React from 'react'
import { InfoWindow } from "react-google-maps";
// import './styles';
import './styles.css';

function InfoWindowComponent ( { setSelectedPark, selectedPark } )
{

    return (
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
                <p> deaths : { selectedPark.deaths }</p>
                <p> recovered : { selectedPark.recovered }</p>
            </div>
        </InfoWindow>
    )
}

export default InfoWindowComponent
