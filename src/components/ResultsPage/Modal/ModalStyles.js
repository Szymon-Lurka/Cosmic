import styled from 'styled-components';

export const StyledModal = styled.div`
width: 100vw;
height: 100vh;
display:flex;
flex-direction:column;
position: fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
background-color:white;
/* z-index: 50; */
/* overflow:hidden; */
@media(min-width: 1300px) {
    flex-direction: row;
}
`;
export const StyledCloseButton = styled.img`
width: 60px;
position: fixed;
right: 15px;
top: 15px;
`;
export const StyledInfoWrapper = styled.div`
display:flex;
flex-direction:column;
margin-top: 80px;
margin-bottom: 0px;
position:relative;
z-index:1999;
@media(min-width:1300px) {
    order: 1;
    width:50%;
}
`;
export const StyledImage = styled.div`
width: 300px;
height: 300px;
margin: 0 auto 15px;
background: url(${({ image }) => image}) no-repeat center;
background-size: cover;
@media(min-width:640px) {
    width: 450px;
    height: 450px;
}
@media(min-width: 800px) {
    width: 500px;
    height: 500px;
}
@media(min-width:1300px) {
    order: 0;
    width: 600px;
    height: 600px;
    margin-top: 70px;
}
`;