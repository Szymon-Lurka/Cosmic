import styled from 'styled-components';

const Heading = styled.h1`
font-size: ${({ theme }) => theme.fontSize.xxl};
font-weight:${({ theme }) => theme.fontWeight.bold};
color: ${({ theme }) => theme.colors.primary};
@media(max-width:1061px) {
    font-size:${({ theme }) => theme.fontSize.xl};
}
@media(max-width:500px) {
    font-size:${({ theme }) => theme.fontSize.m};
    margin-top: 35px;
}
`;

export default Heading;
