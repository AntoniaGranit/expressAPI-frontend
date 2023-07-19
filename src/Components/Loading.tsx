import React from 'react';
import styled from 'styled-components';
import LoadingLaptop from '../assets/loadinglaptop.gif';

const LoadingDiv = styled.div`
margin: auto;
display: flex;
justify-content: center;`

export const Loading = () => {
  return (
    <LoadingDiv>
      <img alt="Loading" src={LoadingLaptop} />
    </LoadingDiv>
  )
}