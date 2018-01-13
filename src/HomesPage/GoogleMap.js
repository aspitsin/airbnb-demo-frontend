import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";

const Maps = styled.div`
  display: none;
  box-sizing: border-box;
  margin-right: 0.5rem;
  @media (min-width: 992px) {
    display: block;
    position: fixed;
    top: 8.5rem;
    right: 0;
    bottom: 0;
    width: 33%;
  }
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
