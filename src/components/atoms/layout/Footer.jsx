import styled from "styled-components";

export const Footer = () => {
  return <SFooter>@copy: 2021 TEST ink.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0px;
  bottom: 0;
  position: fixed;
  width: 100%;
`;
