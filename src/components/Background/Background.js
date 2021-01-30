import styled from 'styled-components';
import background from '../../assets/img/background.png';

const Background = styled.div`
min-width:100vw;
min-height:100vh;
background: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${background}) no-repeat center;
background-size: cover;
z-index:0;
overflow:hidden;
position:relative;
`;

export default Background;
