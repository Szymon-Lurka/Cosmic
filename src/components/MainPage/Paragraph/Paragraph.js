import styled from 'styled-components';

const Paragraph = styled.p`
font-size: ${({ theme }) => theme.fontSize.m};
font-weight: ${({ theme }) => theme.fontWeight.light};
color: ${({ theme }) => theme.colors.primary};
text-align:center;
width:50%;
margin: 40px auto;
@media(max-width:1061px) {
    font-size:${({ theme }) => theme.fontSize.s};
}
@media(max-width:500px) {
    font-size:${({ theme }) => theme.fontSize.xs};
    margin: 20px auto;
}
`;

export default Paragraph;
