import styled from "styled-components";

export const Bottom = styled.div`
  padding: 16px 8px;
  border-top: 1px solid rgba(72, 72, 72, 0.08);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -8px;
  margin-right: -8px;
  @media (min-width: 768px) {
    padding-top: 34px;
    padding-bottom: 34px;
    flex-wrap: nowrap;
  }
`;

export const Logo = styled.img`
  margin-right: 16px;
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

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #636363;
  @media (min-width: 992px) {
    font-size: 15px;
  }
`;

export const NavBottom = styled.div`
  padding-top: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    padding-top: 0;
    width: auto;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialLink = styled.a`
  display: block;
  width: 16px;
  margin: 0 4px;
  @media (min-width: 768px) {
    margin: 0 6px;
    width: auto;
  }
`;

export const Icon = styled.img`
  display: block;
  width: 100%;
`;

export const LinkSupport = Link.extend`
  margin-right: 12px;
  margin-bottom: 0;
  @media (min-width: 768px) {
    margin-right: 16px;
    margin-bottom: 0;
  }
  @media (min-width: 992px) {
    margin-right: 16px;
    margin-bottom: 0;
  }
`;
