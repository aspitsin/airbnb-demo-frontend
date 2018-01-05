import React from "react";
import styled from "styled-components";

import {
  Bottom,
  Logo,
  Copyright,
  NavBottom,
  Social,
  SocialLink,
  Icon,
  LinkSupport
} from "./styled";
import logo from "./logo.svg";
import twitter from "./socialcon/twiter.svg";
import facebook from "./socialcon/facebook.svg";
import instagram from "./socialcon/instagram.svg";

export default function() {
  return (
    <Bottom>
      <Copyright>
        <Logo src={logo} />
        © Airbnb Inc.
      </Copyright>
      <NavBottom>
        <LinkSupport href="#">Terms</LinkSupport>
        <LinkSupport href="#">Privacy</LinkSupport>
        <LinkSupport href="#">Site map</LinkSupport>
        <Social>
          <SocialLink href="#">
            <Icon src={facebook} />
          </SocialLink>
          <SocialLink href="#">
            <Icon src={twitter} />
          </SocialLink>
          <SocialLink href="#">
            <Icon src={instagram} />
          </SocialLink>
        </Social>
      </NavBottom>
    </Bottom>
  );
}
