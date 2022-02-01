import React, { useContext } from 'react';
import { UseApiBinanceContex } from '../../services/UseApiBinance';
import { useLocation, useNavigate } from 'react-router-dom';
import { ContainerList, PrevButton, NextButton, HomeButton } from './ListCrypto elements';
import {FaArrowLeft, FaArrowRight, FaHome} from 'react-icons/fa'
import Loading from '../loading/Loading';
import Footer from '../footer/Footer';

const ListCrypto = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {dataBinance, listCryto} = useContext(UseApiBinanceContex)
    
    if(dataBinance.length == 0){
        return (
            <Loading />
        )
    }

    const query = new URLSearchParams(location.search)
    const queryPage = parseInt(query.get('page')) || 1
    const page = queryPage < 0 ? 0 : queryPage == 1 ? 0 : queryPage > 1 ? (queryPage - 1) * 50 : 0
    const limit = page + 50

    for (let i = page; i < limit; i++) {
        listCryto.push(dataBinance[i])
        
    }

    /* const handleNext = () =>{
        query.set('page', queryPage + 1);
        navigate({search: query.toString()})
    } 
    const handlePre = () =>{
        query.set('page', queryPage - 1);
        navigate({search: query.toString()})
    }  */
    
    return (
        <>
            <ContainerList id='table'>
                <thead>
                    <tr>
                        <th scope="col"><h3>Symbol</h3></th>
                        <th scope="col"><h3>Price</h3></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listCryto.map((crypto, index) =>
                            <tr key={crypto.symbol + index}>
                                <td>{crypto.symbol}</td>
                                <td>${crypto.price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </ContainerList>
            <PrevButton className={queryPage === 1 || queryPage < 0 ? 'disable' : '' } onClick={(e) => {
                e.preventDefault()
                if(queryPage === 1 || queryPage < 0){
                    return null
                }
                query.set('page', queryPage - 1);
                navigate({search: query.toString()})
            }}>
                <FaArrowLeft />
            </PrevButton>
            
            <NextButton type='button' className={limit === dataBinance.length ? 'disable' : '' } onClick={(e) => {
                e.preventDefault()
                query.set('page', queryPage + 1);
                navigate({search: query.toString()})
            }}>
                <FaArrowRight />
            </NextButton>
            <Footer />
        </>
    );
};

export default ListCrypto;