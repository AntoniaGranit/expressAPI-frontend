import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = styled.header`
margin: auto;
height: 80px;
width: 100%;
position: sticky;
display: flex;
flex-direction: row;
justify-content: space-between;
top: 0;
z-index: 1;
background-color: #1C0825;

  @media (min-width: 1024px){
    background-color: transparent;
}`

export const H1 = styled.h1`
color: #FB563E;
font-family: "Questrial";
font-size: 20px;
margin-top: 20px;
margin-left: 30px;
font-weight: bold;
display: flex;
align-items: center;

@media (min-width: 1024px){
    font-size: 20px;
}`

export const HomeLink = styled(Link)`
color: #FB563E;
font-family: "Questrial";
font-weight: bold;
font-size: 20px;
text-decoration: none;
justify-content: flex-start;
border: none;
margin-top: 20px;
margin-right: 30px;
align-items: center;
display: inline-block;
padding: 15px 20px;

:after {    
  margin-top: 4px;
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
`

export const NavigationLink = styled(NavLink)`
color: #FB563E;
font-family: "Questrial";
font-weight: bold;
font-size: 20px;
line-height: 30px;
text-decoration: none;
display: flex;
width: fit-content;
margin: auto;
display: block;

:after {    
  margin-top: 4px;
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
`

export const Button = styled.button`
color: #FB563E;
background-color: #1C0825;
font-family: "Questrial";
font-weight: bold;
font-size: 20px;
border: none;
display: flex;
margin: auto;
cursor: pointer;
display: block;

:after {    
  margin-top: 4px;
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
`