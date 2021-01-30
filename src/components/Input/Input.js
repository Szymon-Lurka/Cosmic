import styled from 'styled-components';

const Input = styled.input`
width: 350px;
position:absolute;
top:40%;
left:50%;
transform:translateX(-50%);
transition:.3s;
background:transparent;
outline-width:0;
border:none;
border-bottom: 1px solid white;
text-align:center;
color:white;
font-weight:${({ theme }) => theme.fontWeight.bold};
font-size:${({ theme }) => theme.fontSize.s};
font-family:'Montserrat',sans-serif;
@media(min-width:500px) {
    top: 60%;
}
@media(min-width:1060px) {
    top: 70%;
}
`;

export default Input;
