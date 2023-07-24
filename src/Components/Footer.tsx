import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  justify-content: flex-end;
`

const FooterP = styled.p`
color: #FB563E;
font-family: "Questrial";
font-weight: bold;
font-size: 18px;
line-height: 30px;
text-decoration: none;
padding-right: 30px;
padding-bottom: 10px;
`

const FooterLink = styled.a`
color: #FB563E;
font-family: "Questrial";
font-weight: bold;
font-size: 18px;
line-height: 30px;
text-decoration: none;
padding-right: 15px;
padding-bottom: 10px;
transition: 0.2s ease-in-out;

&:active {
    color: #FB563E;
}

&:visited {
    color: #FB563E;
}

&:hover {
    opacity: 0.3;
}
`

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterP>created by <FooterLink href="https://antoniagranit.netlify.app" target="_blank" rel="noreferrer">antonia granit</FooterLink></FooterP>
    </FooterWrapper>
  )
};