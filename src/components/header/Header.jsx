import React from 'react';
import { Block, ContainerHeader } from './Header elements';
import {FaHome} from 'react-icons/fa';
import {Link, useNavigate, useLocation} from 'react-router-dom';


const Header = () => {
    const location = useLocation();

    const navigate = useNavigate();
    
    const busqueda= () => {
        var input, filter, table, tr, td, i;
        input = document.getElementById("search");
        filter = input.value.toLowerCase();
        table = document.getElementById("tableSearch");
        tr = table != null ? table.getElementsByTagName("tr") : ''
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
            if (td.innerHTML.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
        }
    }

    return (
        <>
            <ContainerHeader>
                <input type="search" name="" id="search"  placeholder='Search crypto...' onChange={() => busqueda()} onKeyPress={(e) => {
                    if(e.key == 'Enter'){
                        navigate({pathname: '/search'})
                        setTimeout(() => {
                            busqueda()
                        }, 1000)
                    }
                }}/>
            </ContainerHeader>
            <Block>
            </Block>
        </>
    );
};

export default Header;