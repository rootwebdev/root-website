import React from 'react';
import styled from 'styled-components';

import Navbar from '../../components/Navbar';

// Example styled-component, suggest getting a plug-in for IDE for coloring etc.
// Without TS the props can get confusing, so use with caution
const ExampleStyledDiv = styled.div`
  width: 500px;
  height: 500px;
  background-color: lightgreen;
  /* ... */
  color: ${props => props.color};
  font-weight: ${props => props.bold ? 'bold' : 'inherit'};
  font-size: ${props => props.fontSize};
`;

export default () =>
    <div>
        <Navbar/>
        You are now in page 2.
        <br/>
        <ExampleStyledDiv
            color='darkblue'
            bold
            fontSize='30px'>
            I'm a styled-div
        </ExampleStyledDiv>
    </div>