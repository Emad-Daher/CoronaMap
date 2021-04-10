import React from 'react'
import { InfoWindow } from "react-google-maps";
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
            <div >
                <h2> <i class="las la-globe-americas"></i> { selectedPark.country }</h2>
                <p> <i class="las la-meh"></i> cases : { selectedPark.cases }</p>
                <p> <i class="las la-skull-crossbones"></i> deaths : { selectedPark.deaths }</p>
                <p> <i class="las la-first-aid"></i> recovered : { selectedPark.recovered }</p>
            </div>
        </InfoWindow>
    )
}

export default InfoWindowComponent
