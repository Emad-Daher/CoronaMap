import './App.css';
import { MapWrapped } from './screen/Map'

function App ()
{
  return (
    <div style={ { width: "100vw", height: "100vh" } }>
      <MapWrapped
        googleMapURL={ `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places` }
        loadingElement={ <div class="div1" /> }
        containerElement={ <div class="div1" /> }
        mapElement={ <div class="div1" /> }
      />
    </div>
  );
}

export default App;
