import './Style.css'
import React from 'react'
import UseApiBinanceProvider from './services/UseApiBinance'
import ListCrypto from './components/listCryto/ListCrypto'
import Header from './components/header/Header'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import SearchCrypto from './components/search crypto/SearchCrypto'
import Footer from './components/footer/Footer';

const App = () => {
    
return (
    <Router>
        <UseApiBinanceProvider>
            <Header />
            <Routes>
                
                <Route path='/search' element={<SearchCrypto />} />
                <Route path='/' element={<ListCrypto />} />
            </Routes>
        </UseApiBinanceProvider>
    </Router>
)
}

export default App
