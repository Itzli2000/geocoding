import { useState } from 'react';
import singleSearchService from '../api/singleSearch/indext';
import { GeocodingResult } from '../types';

const useGeocoding = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [results, setResults] = useState<GeocodingResult | null>(null);

  const geocodeAddress = async (address: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await singleSearchService.getOnelineaddress({
        returntype: 'locations',
        searchtype: 'onelineaddress',
        benchmark: '2020',
        address,
        format: 'json',
      });
      console.log(response);
      setResults(response);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, results, geocodeAddress };
};

export default useGeocoding;
