import styled from "styled-components";

export const Top = styled.div`
  display: flex;
  padding-top: 16px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.08);
  padding-bottom: 24px;
  margin-left: -12px;
  margin-right: -12px;
  @media (min-width: 768px) {
    padding-top: 48px;
    padding-bottom: 32px;
  }
  @media (min-width: 991px) {
    padding-bottom: 40px;
  }
`;

export const Logo = styled.img`
  margin-right: 16px;
`;

export const Location = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  margin-right: -8px;
  margin-left: -8px;
  @media (min-width: 768px) {
    flex-direction: column;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const SelectWrap = styled.div`
  position: relative;
  display: flex;
  flex-basis: 50%;
  margin-left: 8px;
  margin-right: 8px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
    flex-basis: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Arrow = styled.img`
  position: absolute;
  top: 50%;
  margin-top: -4px;
  right: 8px;
`;

export const Select = styled.select`
  padding: 12px 34px 12px 8px;
  font-size: 12px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  color: #383838;
  font-family: "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  cursor: pointer;
  width: 100%;
  text-indent: 0.01px;
  -ms-appearance: none;
  appearance: none !important;
  &::-ms-expand {
    display: none;
  }
  @media (min-width: 768px) {
    font-size: 15px;
    padding: 14px 34px 15px 8px;
  }
  @media (min-width: 992px) {
    font-size: 18px;
    padding: 12px 34px 13px 16px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Title = styled.h3`
  margin-bottom: 19px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  @media (min-width: 992px) {
    font-size: 15px;
    margin-bottom: 16px;
  }
`;

export const Link = styled.a`
  margin-bottom: 11px;
  font-size: 12px;
  line-height: 16px;
  color: #636363;
  @media (min-width: 992px) {
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 8px;
  }
`;
