import styled from 'styled-components';

const ModalParagraph = styled.p`
font-size: ${({ theme }) => theme.fontSize.xs};
font-weight: ${({ theme }) => theme.fontWeight.light};
width:80%;
text-align:left;
margin: 20px auto;
height: 200px;
overflow:${({ desc }) => desc ? "scroll" : "visible"};
overflow-x:hidden;
&::-webkit-scrollbar {
    display:none;
}
--ms-overflow-style:none;
scrollbar-width:none;
@media(min-width:640px) {
    font-size:${({ theme }) => theme.fontSize.s};
}
@media(min-width:1000px) {
    height: 400px;
}
& span {
    color:${({ theme }) => theme.colors.secondary};
}
`;

export default ModalParagraph;
