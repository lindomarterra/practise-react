import React from 'react' 
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import Provider from './context/Provider'

function App() {
  return ( 

    <Provider >
        
         <Header/>
          <Body/>
          <Footer/>

    </Provider>

  )
}

export default App
