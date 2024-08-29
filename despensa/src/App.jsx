import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import itemListContainer from './componentes/itemListContainer/itemListContainer'

const App = () => {
  return (
     <>
     <NavBar/>

     <itemListContainer greeting="excelentes productos"/>

     </>
  )
 
}

export default App