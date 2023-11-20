import React, { useContext } from 'react' 
import { FaCartShopping } from "react-icons/fa6" 
import CartItems from './CartItems'
import AppContext from '../context/AppContext'
import formatCurrency from '../utils/formatCurrency'

function Cart() {

    const { insertItem }=useContext(AppContext)

    const totalPrice= insertItem.reduce((acc, item)=>  item.price + acc, 0  )

    return ( 
        
        <div>
    
            <button 
            style={{fontSize:'1.3rem'}}  
            className='border-0 bg-transparent position-relative me-2 '
            data-bs-target='#show-hide-cart'
            data-bs-toggle='offcanvas'
            >
                <FaCartShopping />

             {insertItem.length > 0  &&   <span 
                style={{fontSize:'11px',width:'15px', height:'15px',display:'flex', justifyContent:'center', alignItems:'center'}} 
                className='bg-danger text-white position-absolute top-0 end-0 p-1 rounded-circle' >
                    {insertItem.length }
                </span> }     

               
            </button>
        


           <div className='offcanvas offcanvas-start'  id='show-hide-cart' >

                <div style={{backgroundColor:'#ebebed'}}  className='offcanvas-header'>
                    <h4 className='text-uppercase text-black-50 fw-bolder' > my shops: </h4>
                    <button className='btn btn-close text-black-50' data-bs-dismiss='offcanvas' ></button>
                </div>

                <div className='offcanvas-body' >

                    {insertItem.map((item)=> <CartItems key={item.id} data={item}  /> )} 
                    
                </div>

                <div style={{backgroundColor:'#ebebed'}} className='offcanvas-footer' >
                     <p className='text-danger fw-bolder text-center text-uppercase pt-4'> TOTAL PRICE: {formatCurrency(totalPrice, 'BRL')} </p>   
                </div>
            
          </div> 

        
        
        </div>

    )
}

export default Cart