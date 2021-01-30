import styled from 'styled-components';

const ModalHeading = styled.h1`
font-size: ${({ theme }) => theme.fontSize.s};
font-weight: ${({ theme }) => theme.fontWeight.extraBold};
color:${({ theme }) => theme.colors.secondary};
width:80%;
text-align:left;
margin: 0 auto 30px;
position:relative;
@media(min-width:640px) {
    text-align:left;
    font-size:${({ theme }) => theme.fontSize.m};
}
&::after {
    content:'';
    position:absolute;
    width:100%;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.secondary};
    bottom: -20px;
    left:0;
}
`;

export default ModalHeading;
