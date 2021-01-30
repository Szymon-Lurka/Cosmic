import React from 'react';
import closeIcon from '../../../assets/svg/close.svg';
import ModalHeading from './ModalHeading/ModalHeading';
import ModalParagraph from './ModalParagraph/ModalParagraph';

import {
    StyledModal,
    StyledCloseButton,
    StyledInfoWrapper,
    StyledImage,
} from './ModalStyles';

const Modal = ({ onClick, content, isVisible }) => {
    return (
        <StyledModal
            isVisible={isVisible}>
            <StyledCloseButton
                src={closeIcon} alt=""
                onClick={onClick} />
            <StyledInfoWrapper>
                <ModalHeading>
                    {content.data[0].title}
                </ModalHeading>
                <ModalParagraph desc="true">
                    {content.data[0].description.substring(0, 400)}
                </ModalParagraph>
                <ModalParagraph>
                    <span>Creator:</span>
                    {content.data[0].secondary_creator}
                    <br />
                    <span>NASA ID:</span>
                    {content.data[0].nasa_id}
                </ModalParagraph>
            </StyledInfoWrapper>
            <StyledImage
                image={content.links[0].href} />
        </StyledModal>
    );
};

export default Modal;
