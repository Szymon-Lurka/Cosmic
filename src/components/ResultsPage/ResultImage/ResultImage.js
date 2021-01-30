import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.div`
width: 350px;
height: 350px;
background: url(${({ image }) => image}) no-repeat center;
background-position: center;
background-size:cover;
`;

const ResultImage = ({ image }) => {
    return (
        <StyledImage image={image} />
    );
}

export default ResultImage;
