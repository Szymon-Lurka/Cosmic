import styled from 'styled-components';

export const StyledWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
grid-gap: 25px;
`;
export const StyledResultWrapper = styled.div`
display:grid;
grid-template-columns: 350px;
justify-content:center;
grid-gap: 50px;
margin-top: 100px;
@media(min-width:800px) {
    grid-template-columns: repeat(2, 350px);
}
@media(min-width: 1300px) {
    grid-template-columns: repeat(3, 350px);
}
`;
export const StyledLogoWrapper = styled.div`
margin: 0 auto 20px;
cursor:pointer;
`;