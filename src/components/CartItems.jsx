import React, {useContext} from 'react'  
import { BsFillCartXFill } from "react-icons/bs";
import formatCurrency from '../utils/formatCurrency';
import '../index.css'
import AppContext from '../context/AppContext';

function CartItems( {data } ) {

    const {id ,thumbnail, title, price }=data
    const {insertItem, setInsertItem}=useContext(AppContext)

    const handleRemove=()=>{
        const updateItems=insertItem.filter((item)=> item.id !== id  )
        setInsertItem(updateItems)
    }

    return ( 
        <section className='border-bottom'  >

            <div className='row' >
                <div className='col-4 d-flex align-items-center justify-content-center ' >
                    <img src={thumbnail} alt="products"  />
                </div>

                <div className='col-8 position-relative' >
                    <p style={{fontSize:'0.8rem'}} className='p-1' > {title} </p>
                    <p className='text-text-uppercase text-danger fw-bolder' > {formatCurrency(price, 'BRL')} </p>
                    <button style={{fontSize:'1.5rem'}} onClick={handleRemove}
                    className='btn-cart-remove position-absolute top-0 end-0 text-danger border-0 rounded-circle px-2 py-1' >
                         <BsFillCartXFill />
                    </button>
                </div>
            </div>


        </section>
    )
}

export default CartItems