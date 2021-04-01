// import logo from './logo.svg';
// import './App.css';
import { MapWrapped } from './Map'

function App ()
{
  return (
    <div style={ { width: "100vw", height: "100vh" } }>
      <MapWrapped
        googleMapURL={ `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places` }
        loadingElement={ <div style={ { height: `100%` } } /> }
        containerElement={ <div style={ { height: `100%` } } /> }
        mapElement={ <div style={ { height: `100%` } } /> }
      />
    </div>
  );
}

export default App;
