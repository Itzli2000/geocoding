import { useState } from 'react';
import useGeocoding from '../../hooks/useGeocoding';


function Geocoding() {
  const [address, setAddress] = useState('');
  const { loading, error, results, geocodeAddress } = useGeocoding();

  const handleGeocode = () => {
    geocodeAddress(address);
  };

  return (
    <div>
      <h1>Geocoding App</h1>
      <input 
        type="text" 
        value={address} 
        onChange={(e) => setAddress(e.target.value)} 
        placeholder="Enter address" 
      />
      <button onClick={handleGeocode}>Geocode</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {results && (
        <div>
          <h2>Results</h2>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Geocoding;
