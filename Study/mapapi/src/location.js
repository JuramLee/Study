import { useEffect } from 'react';
const { kakao } = window;

const Location = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
    marker.setDraggable(true);
  }, []);

  return (
    <div>
      <div id='map' style={{ width: '500px', height: '400px' }}></div>
    </div>
  );
};

export default Location;
