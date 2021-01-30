import React, { useState } from 'react';
import logo from '../../assets/svg/LOGO_DARK.svg';
import { motion } from "framer-motion"
import ResultImage from '../ResultsPage/ResultImage/ResultImage';
import Modal from '../ResultsPage/Modal/Modal';
import {
    StyledWrapper,
    StyledLogoWrapper,
    StyledResultWrapper
} from '../ResultsPage/ResultPageStyles';

const ResultPage = ({ results, children, onClick }) => {
    const [isModalActive, setIsModalActive] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const handleSwitchModal = (result) => {
        setIsModalActive(!isModalActive);
        setModalContent(result);
    }
    return (
        <StyledWrapper>
            <StyledLogoWrapper>
                <motion.img
                    onClick={onClick}
                    src={logo}
                    alt="logo"
                    initial={{ y: -50 }}
                    animate={{ y: 40 }} />
            </StyledLogoWrapper>
            {children}
            <StyledResultWrapper>
                {results.map(result => (
                    <>
                        <motion.div
                            initial={{ y: -150 }}
                            animate={{ y: 0 }}>
                            <ResultImage
                                image={result.links[0].href}
                                key={result.links[0].href}
                                onClick={() => handleSwitchModal(result)}
                            />
                        </motion.div>
                    </>
                )
                )}
                {isModalActive &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <Modal
                            onClick={() => handleSwitchModal(null)}
                            content={modalContent}
                            key={modalContent.data[0].description} />
                    </motion.div>
                }
            </StyledResultWrapper>
        </StyledWrapper>
    );
}

export default ResultPage;
