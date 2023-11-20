import React from 'react' 
import SearchBar from './SearchBar'
import Cart from './Cart'

function Header() {
    return ( 
        <header style={{backgroundColor:'#fff156'}} 
        className='shadow-lg' >
            <div className='p-2 d-flex justify-content-between align-items-center  '>
            
                <SearchBar/>
                <Cart/>

            </div>
        </header>
    )
}

export default Header