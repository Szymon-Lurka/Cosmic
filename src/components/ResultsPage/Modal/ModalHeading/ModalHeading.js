import styled from 'styled-components';

const ModalHeading = styled.h1`
font-size: ${({ theme }) => theme.fontSize.s};
font-weight: ${({ theme }) => theme.fontWeight.extraBold};
color:${({ theme }) => theme.colors.secondary};
width:80%;
text-align:center;
margin: 0 auto;
@media(min-width:640px) {
    text-align:left;
    font-size:${({ theme }) => theme.fontSize.m};
}
`;

export default ModalHeading;
