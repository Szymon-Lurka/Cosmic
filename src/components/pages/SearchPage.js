import React from 'react';
import styled from 'styled-components';
import Heading from '../MainPage/Heading/Heading';
import Paragraph from '../MainPage/Paragraph/Paragraph';

const StyledWrapper = styled.div`
display:flex;
flex-direction: column;
width:100%;
height:70%;
align-items:center;
justify-content:center;
padding-top: 120px;
text-align:center;
`;

const SearchPage = () => {
    return (
        <StyledWrapper>
            <Heading>COSMIC</Heading>
            <Paragraph>Begin your journey around the space and discover everything you want!</Paragraph>
            <Paragraph>Type anything space-related below to start.</Paragraph>
        </StyledWrapper>
    );
}

export default SearchPage;