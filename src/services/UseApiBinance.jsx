import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
export const UseApiBinanceContex = createContext()

const UseApiBinanceProvider = ({ children} ) => {
    const [dataBinance, setDataBinance] = useState([])

    const listCryto = []

    axios.get('https://api.binance.com/api/v3/ticker/price').then(res => setDataBinance(res.data))

    return (
        <UseApiBinanceContex.Provider value={ { dataBinance, setDataBinance, listCryto } }>
            { children }
        </UseApiBinanceContex.Provider>
    );
};

export default UseApiBinanceProvider;