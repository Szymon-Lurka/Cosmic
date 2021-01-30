import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.div`
width: 350px;
height: 350px;
background: url(${({ image }) => image}) no-repeat center;
background-position: center;
background-size:cover;
cursor:pointer;
`;

const ResultImage = ({ image, onClick }) => {
    return (
        <StyledImage image={image} onClick={onClick} />
    );
}

export default ResultImage;
