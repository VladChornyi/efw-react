import styled from "styled-components";

export const Btn = styled.button`
padding: 5px 10px;
border-radius: 5px;
cursor: pointer;
background-color: ${({main}) => main ? '#8c7ae6' : 'transparent'};
color: ${({main}) => main ? '#f5f6fa' : '#8c7ae6'};
border-color: ${({main}) => main ? '#f5f6fa' : '#8c7ae6'};
&:hover{background-color: ${({main}) => main ? 'red' : 'green'};}
`