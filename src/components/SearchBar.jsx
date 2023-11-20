import React, { useContext, useState } from 'react' 
import { CiSearch } from "react-icons/ci";
import AppContext from '../context/AppContext';
import FetchProducts from '../api/FetchProducts';

function SearchBar() {

    const [searchProd, setSearchProd]=useState('')
    const { setProducts, setLoading }=useContext(AppContext)

    const handleInput=  async (event)=>{
        event.preventDefault()
        setLoading(true)

        const getProducts= await  FetchProducts(searchProd)
        setProducts(getProducts)
        setLoading(false)
        setSearchProd('')
    }

    return ( 

        <form  onSubmit={handleInput} >
            <input 
            style={{outline:'none', fontStyle:'italic'}}
            type='search' required 
            placeholder='input here...' 
            className='bg-light border-0 p-1 btn-outline-light text-black-50 border-end  '
            value={searchProd}
            onChange={( {target} )=> setSearchProd(target.value) }
             />

            <button type='button' className='bg-light border-0 p-1 px-2 ' >
               <CiSearch />
            </button>
        </form>
    )
}

export default SearchBar