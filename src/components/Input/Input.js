import styled from 'styled-components';

const Input = styled.input`
width: 230px;
position:absolute;
top:${({ loaded }) => loaded ? "18%" : "65%"};
left:50%;
transform:translateX(-50%);
transition:.3s;
background:transparent;
outline-width:0;
border:none;
border-bottom: 1px solid ${({ loaded }) => loaded ? "#4528BA" : "white"};
text-align:center;
color:${({ loaded }) => loaded ? "#4528BA" : "white"};
font-weight:${({ theme }) => theme.fontWeight.bold};
font-size:${({ theme }) => theme.fontSize.s};
font-family:'Montserrat',sans-serif;
&::placeholder {
    color:#D4D4D4;
}
@media(min-width:500px) {
    top: ${({ loaded }) => loaded ? "15%" : "60%"};
}
@media(min-width:540px) {
    top: ${({ loaded }) => loaded ? "15%" : "70%"};
}
@media(min-width:1024px) {
    top: ${({ loaded }) => loaded ? "15%" : "40%"};
    width: 450px;
}
@media(min-width:1060px) {
    top: ${({ loaded }) => loaded ? "15%" : "75%"};
}
@media(min-width:1366px) {
    top: ${({ loaded }) => loaded ? "15%" : "85%"};
}
@media(min-width:1666px) {
    top: ${({ loaded }) => loaded ? "15%" : "70%"};
}
`;

export default Input;
