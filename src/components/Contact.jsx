import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'

const Contact = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.AIzaSyBEJ1MD9CLuELvuu_PPfZxu6cZhqtxGMUU,
  });
  const center = useMemo(() => ({lat: 18.52043, lng: 73.856743}), []);

  return (
    <div className='location'>
    {!isLoaded ? (
      <h1>Loading...</h1>
    ) : (
      <GoogleMap
        mapContainerClassName="map-container"
        center={center}
        zoom={10}
      />
    )}
  </div>
  );
};

export default Contact