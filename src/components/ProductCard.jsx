import React, { useContext } from 'react' 
import { BsCartPlusFill } from "react-icons/bs"
import '../index.css'
import formatCurrency from '../utils/formatCurrency'
import AppContext from '../context/AppContext'

function ProductCard( {data} ) {

    const {thumbnail, title, price}=data
    const {insertItem, setInsertItem}=useContext(AppContext)

    const addProductCart= ()=> setInsertItem( [...insertItem, data] )

    return (

        <section  
        style={{maxWidth:'330px', cursor:'pointer' }}
        className='d-flex flex-column position-relative btn-add-cart-hover w-100'
        >
            <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
            alt="product" 
            className='w-100'/>

            <div className='p-2 text-center bg-light border-top h-50 ' >
                <h5 className='text-danger fw-bolder'> {formatCurrency(price, 'BRL')}  </h5>
                <p className='text-black-50' > {title} </p>
            </div>

            <button type='button' onClick={addProductCart}
            className='position-absolute border-0 rounded-circle px-2 py-2 text-text-black-50 btn-add-cart end-0 m-1 ' >
                    <BsCartPlusFill />
            </button>

        </section>
    )
}

export default ProductCard