import React from 'react';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import { ContainerLoading } from './Loading elements';


const Loading = () => {
    return (
        <ContainerLoading>
            <AiOutlineLoading3Quarters />
        </ContainerLoading>
    );
};

export default Loading;