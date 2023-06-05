import { useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';

const { kakao } = window;

const matchingMap = () => {
  const [state, setState] = useState({
    center: { lat: 37.496768, lng: 127.02474 },
    inPanto: true,
  });

  const [searchAddress, SetSearchAddress] = useState();

  const searchMap = () => {
    const geocoder = new kakao.maps.services.Geocoder();

    let callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = result[0];
        console.log(newSearch);
        setState({
          center: { lat: newSearch.y, lng: newSearch.x },
        });
      }
    };
    geocoder.addressSearch(`${searchAddress}`, callback);
  };

  const handleSearchAddress = (e) => {
    SetSearchAddress(e.target.value);
  };

  return (
    <Map
      center={state.center}
      isPanto={state.isPanto}
      style={{ width: '100%', height: '360px' }}
      level={3}></Map>
  );
};

export default matchingMap;
