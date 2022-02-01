import React from 'react';
import {ContainerFooter} from './Footer elements'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
const Footer = () => {
    return (
        <ContainerFooter>
            <span>
                <AiOutlineCopyrightCircle />  Copyright 2022
            </span>
        </ContainerFooter>
    );
};

export default Footer;