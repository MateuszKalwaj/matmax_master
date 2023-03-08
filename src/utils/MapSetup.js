import mapboxGl from "mapbox-gl";

export const createMap = () => {
  mapboxGl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;
  const map = new mapboxGl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [16.136018, 54.179953],
    zoom: 12,
  });

  const popupParams = {
    offset: 25,
    closeButton: false,
    closeOnClick: true,
    className: "popup",
  };

  const popup = new mapboxGl.Popup(popupParams).setText("MATMAX");

  const marker = new mapboxGl.Marker()
    .setLngLat([16.136018, 54.179953])
    .setPopup(popup)
    .addTo(map);

  marker.togglePopup();

  map.addControl(new mapboxGl.NavigationControl());
};
