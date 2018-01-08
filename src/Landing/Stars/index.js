import React from "react";
import styled from "styled-components";
import star from "/FRONTEND/airbnb-frontend/src/Landing/Stars/star.svg";

const StarWrapper = styled.span`
  display: inline-block;
  margin-right: 0.25rem;
`;

const Star = styled.span`
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.25rem;
  background-size: cover;
`;

export default () => {
  return (
    <StarWrapper>
      <Star src={star} />
      <Star src={star} />
      <Star src={star} />
      <Star src={star} />
      <Star src={star} />
    </StarWrapper>
  );
};
