import React, { useState }  from 'react' 
import AppContext from './AppContext'

function Provider( { children } ) {

    const [products, setProducts]=useState([])
    const [loading, setLoading]=useState(true)
    const [searchProd, setSearchProd]=useState([])
    const [insertItem, setInsertItem]=useState([])

    const value={
        products, setProducts, loading, setLoading, searchProd, setSearchProd, 
        insertItem, setInsertItem
    }

    return (
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
    )
}

export default Provider