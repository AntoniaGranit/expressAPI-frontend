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
padding-right: 25px;
padding-bottom: 10px;

&a {
    color: #FB563E;  
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
      <FooterP>created by <a href="https://antoniagranit.netlify.app" target="_blank" rel="noreferrer">antonia granit</a></FooterP>
    </FooterWrapper>
  )
};