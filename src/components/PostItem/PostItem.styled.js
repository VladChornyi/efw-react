import styled from 'styled-components';

export const ListItem = styled.li`
width: 90%;
border: 2px solid red;
background-image: url(${({image})=>image});
`

export const Title = styled.h4`
color: blue;
font-size: 17px;
`

export const Text = styled.p`
color: darkblue;

`