import React, { useContext, useEffect } from 'react' 
import ProductCard from './ProductCard'
import FetchProducts from '../api/FetchProducts'
import '../index.css'
import Loading from './Loading'
import AppContext from '../context/AppContext'

function Products() {

    const {loading, products, setLoading, setProducts}=useContext(AppContext)

    useEffect(
        ()=>{

            FetchProducts().then((response)=>{
                setLoading(true)
                setProducts(response)

                setLoading(false)
            })

        },[]
    )

    return (

        (loading ? <Loading/> :    <div className='products-components'>                   
        {products.map((prod)=> < ProductCard  key={prod.id} data={prod}  /> )}
    </div> )


         
    )
}

export default Products