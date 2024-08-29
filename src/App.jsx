import React from 'react'
import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal'
import Boton from './componentes/Boton/Boton'
import ItemCount from './componentes/ItemCount/ItemCount'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

const App = () => {

  const panelAltaEficiencia= {
    marca: "Samsumg LMH-301 evo",
    precio: 1000000,
  }

  return (
    <>

      <NavBar/>
      <ItemListContainer greeting="Mis productos"/>
      

    </>
  )
}

export default App
