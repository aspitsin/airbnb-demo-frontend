import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";

const Maps = styled.div`
  position: fixed;
  width: 391px;
  height: 700px;
  left: 993px;
  top: 140px;
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
