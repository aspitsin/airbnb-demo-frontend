import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";

const Maps = styled.div`
  position: absolute;
  width: 391px;
  height: 900px;
  left: 1010px;
  top: 141px;
`;

export default () => {
  return (
    <Maps>
      <GoogleMapReact
        apiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}
        defaultCenter={{ lat: 59.95, lng: 30.33 }}
        defaultZoom={11}
      />
    </Maps>
  );
};
