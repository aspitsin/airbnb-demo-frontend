import React from "react";
import {
  Top,
  Select,
  Nav,
  Title,
  Link,
  Location,
  SelectWrap,
  Arrow
} from "./styled";

import ChevronDown from "./arrow-down.svg";

export default function() {
  return (
    <Top>
      <div className="col-xs-12 col-md-3">
        <Location>
          <SelectWrap>
            <Select>
              <option>English</option>
              <option>Russian</option>
            </Select>
            <Arrow src={ChevronDown} />
          </SelectWrap>
          <SelectWrap>
            <Select>
              <option>United States Dollar</option>
              <option>Ruble</option>
            </Select>
            <Arrow src={ChevronDown} />
          </SelectWrap>
        </Location>
      </div>
      <div className="hidden-xs hidden-sm col-md-3 col-md-offset-1">
        <Title>Airbnb</Title>
        <Nav>
          <Link href="#">About us</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Press</Link>
          <Link href="#">Policies</Link>
          <Link href="#">Help</Link>
          <Link href="#">Diversity & Belonging</Link>
        </Nav>
      </div>
      <div className="hidden-xs hidden-sm col-md-3">
        <Title>Discover</Title>
        <Nav>
          <Link href="#">Trust & Safety</Link>
          <Link href="#">Travel Credit</Link>
          <Link href="#">Gift Cards</Link>
          <Link href="#">Airbnb Citizen</Link>
          <Link href="#">Business Travel</Link>
          <Link href="#">Guidebooks</Link>
          <Link href="#">Airbnbmag</Link>
        </Nav>
      </div>
      <div className="hidden-xs hidden-sm col-md-2">
        <Title>Hosting</Title>
        <Nav>
          <Link href="#">Why host</Link>
          <Link href="#">Hospitality</Link>
          <Link href="#">Responsible Hosting</Link>
          <Link href="#">Community Center</Link>
        </Nav>
      </div>
    </Top>
  );
}
