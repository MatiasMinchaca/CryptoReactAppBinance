import React, { useContext } from 'react';
import { FaHome } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { UseApiBinanceContex } from '../../services/UseApiBinance';
import Footer from '../footer/Footer';
import { ContainerList } from '../listCryto/ListCrypto elements';
import Loading from '../loading/Loading';

const SearchCrypto = () => {
    const {dataBinance} = useContext(UseApiBinanceContex)
    
    if(dataBinance.length == 0){
        return (
            <Loading />
        )
    }

    return (
        <>
        <ContainerList id='tableSearch'>
                <thead>
                    <tr>
                        <th scope="col"><h3>Symbol</h3></th>
                        <th scope="col"><h3>Price</h3></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataBinance.map((crypto, index) =>
                            <tr key={crypto.symbol + index}>
                                <td>{crypto.symbol}</td>
                                <td>${crypto.price}</td>
                            </tr>
                        )
                    }
                </tbody>
        </ContainerList>
        <Link className='buttonHome' to='/CryptoReactAppBinance'>
                <FaHome />
        </Link>
        <Footer />
        </>
    );
};

export default SearchCrypto;