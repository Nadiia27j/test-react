import styled from "styled-components";


export const UserSpan = styled.span`
background-color: gray;
color: ${({ isRed }) => isRed ? 'red' : 'blue'};
${UseData}:hover & {
    background-color: yellow;
}
`;


export const UseData = styled.p`
color: red;
font-size: 24px;

&:hover {
    color: green;
}

&:hover ${UserSpan} {
  background-color: yelloy;
}
`

