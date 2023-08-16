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
  align-items: center;
  background-color: #1C0825;
  height: 50px;

  @media (min-width: 1024px){
    background-color: transparent;
}
`

const FooterP = styled.p`
color: #FB563E;
font-family: "Questrial";
font-weight: bold;
font-size: 18px;
line-height: 30px;
text-decoration: none;
padding-right: 30px;
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
display: inline-block;

:after {
  background: none repeat scroll transparent;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: relative;
  background: #FB563E;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

:hover:after { 
  width: 100%; 
  left: 0; 
}

&:active {
    color: #FB563E;
}

&:visited {
    color: #FB563E;
}

`

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterP>created by <FooterLink href="https://antoniagranit.netlify.app" target="_blank" rel="noreferrer">antonia granit</FooterLink></FooterP>
    </FooterWrapper>
  )
};