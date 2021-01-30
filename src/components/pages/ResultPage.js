import React from 'react';
import logo from '../../assets/svg/LOGO_DARK.svg';
import styled from 'styled-components';
import { motion } from "framer-motion"
import ResultImage from '../ResultsPage/ResultImage/ResultImage';

const StyledWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
grid-gap: 25px;
`;
const StyledResultWrapper = styled.div`
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
const StyledLogoWrapper = styled.div`
margin: 0 auto;
`;
const ResultPage = ({ results, children }) => {
    return (
        <StyledWrapper>
            <StyledLogoWrapper>
                <motion.img src={logo} alt="logo" initial={{ y: -50 }} animate={{ y: 40 }} />
            </StyledLogoWrapper>
            {children}
            <StyledResultWrapper>
                {results.map(result => (
                    <motion.div initial={{ y: -150 }} animate={{ y: 0 }}>
                        <ResultImage image={result.links[0].href} key={result.links[0].href} />
                    </motion.div>
                ))}
            </StyledResultWrapper>
        </StyledWrapper>
    );
}

export default ResultPage;
